import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cees")
export default class CeeController {
  @operation({
    summary: "Get Cees",
  })
  @get()
  static getCees = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cee",
  })
  @post("{id}")
  static createCee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
