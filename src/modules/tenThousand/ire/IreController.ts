import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ires")
export default class IreController {
  @operation({
    summary: "Get Ires",
  })
  @get()
  static getIres = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ire",
  })
  @post("{id}")
  static createIre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
