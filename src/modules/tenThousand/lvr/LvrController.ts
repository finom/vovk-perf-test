import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvrs")
export default class LvrController {
  @operation({
    summary: "Get Lvrs",
  })
  @get()
  static getLvrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvr",
  })
  @post("{id}")
  static createLvr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
