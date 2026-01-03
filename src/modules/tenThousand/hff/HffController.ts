import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hffs")
export default class HffController {
  @operation({
    summary: "Get Hffs",
  })
  @get()
  static getHffs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hff",
  })
  @post("{id}")
  static createHff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
