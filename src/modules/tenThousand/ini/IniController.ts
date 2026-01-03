import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inis")
export default class IniController {
  @operation({
    summary: "Get Inis",
  })
  @get()
  static getInis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ini",
  })
  @post("{id}")
  static createIni = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
