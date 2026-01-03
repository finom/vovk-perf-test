import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imbs")
export default class ImbController {
  @operation({
    summary: "Get Imbs",
  })
  @get()
  static getImbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imb",
  })
  @post("{id}")
  static createImb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
