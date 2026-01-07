import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajg")
export default class AjgController {
  @operation({
    summary: "Get Ajg",
  })
  @get()
  static getAjg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajg",
  })
  @post("{id}")
  static createAjg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
