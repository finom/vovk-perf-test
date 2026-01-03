import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imes")
export default class ImeController {
  @operation({
    summary: "Get Imes",
  })
  @get()
  static getImes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ime",
  })
  @post("{id}")
  static createIme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
