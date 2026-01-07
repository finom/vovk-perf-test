import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ire")
export default class IreController {
  @operation({
    summary: "Get Ire",
  })
  @get()
  static getIre = procedure({
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
