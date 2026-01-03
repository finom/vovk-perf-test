import { procedure, prefix, get, post, operation } from "vovk";

@prefix("caks")
export default class CakController {
  @operation({
    summary: "Get Caks",
  })
  @get()
  static getCaks = procedure({
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
