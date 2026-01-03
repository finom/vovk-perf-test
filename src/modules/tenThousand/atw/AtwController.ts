import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atws")
export default class AtwController {
  @operation({
    summary: "Get Atws",
  })
  @get()
  static getAtws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atw",
  })
  @post("{id}")
  static createAtw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
