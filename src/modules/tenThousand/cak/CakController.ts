import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cak")
export default class CakController {
  @operation({
    summary: "Get Cak",
  })
  @get()
  static getCak = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cak",
  })
  @post("{id}")
  static createCak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
