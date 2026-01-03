import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebbs")
export default class EbbController {
  @operation({
    summary: "Get Ebbs",
  })
  @get()
  static getEbbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebb",
  })
  @post("{id}")
  static createEbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
