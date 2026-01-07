import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxh")
export default class HxhController {
  @operation({
    summary: "Get Hxh",
  })
  @get()
  static getHxh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxh",
  })
  @post("{id}")
  static createHxh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
