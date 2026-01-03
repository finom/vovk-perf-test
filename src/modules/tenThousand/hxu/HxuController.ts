import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxus")
export default class HxuController {
  @operation({
    summary: "Get Hxus",
  })
  @get()
  static getHxus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxu",
  })
  @post("{id}")
  static createHxu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
