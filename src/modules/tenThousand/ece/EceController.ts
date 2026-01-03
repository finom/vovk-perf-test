import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eces")
export default class EceController {
  @operation({
    summary: "Get Eces",
  })
  @get()
  static getEces = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ece",
  })
  @post("{id}")
  static createEce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
