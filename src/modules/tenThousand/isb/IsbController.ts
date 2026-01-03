import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isbs")
export default class IsbController {
  @operation({
    summary: "Get Isbs",
  })
  @get()
  static getIsbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isb",
  })
  @post("{id}")
  static createIsb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
