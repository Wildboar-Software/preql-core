import i18n from "i18next";
import I18FileSystemBackend from "i18next-fs-backend";
import osLocale from "os-locale";
import isDebugging from "is-debugging";
import main from "./main";
import * as path from "path";

if (require.main === module)
{
    console.log(`${__filename} was executed.`);
}

i18n
    .use(I18FileSystemBackend)
    .init({
        debug: isDebugging,
        lng: osLocale.sync().slice(0, 2),
        ns: [
            "index",
        ],
        fallbackLng: "en",
        pluralSeparator: "#",
        contextSeparator: "@",
        backend: {
            loadPath: path.join(__dirname, "../locales/{{lng}}/language/{{ns}}.json"),
            addPath: path.join(__dirname, "../locales/{{lng}}/language/{{ns}}.missing.json"),
        },
        initImmediate: false,
    }).then(main);
