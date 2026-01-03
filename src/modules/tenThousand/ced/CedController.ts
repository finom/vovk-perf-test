import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceds")
export default class CedController {
  @operation({
    summary: "Get Ceds",
  })
  @get()
  static getCeds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ced",
  })
  @post("{id}")
  static createCed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
