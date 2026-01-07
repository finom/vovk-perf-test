import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isb")
export default class IsbController {
  @operation({
    summary: "Get Isb",
  })
  @get()
  static getIsb = procedure({
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
