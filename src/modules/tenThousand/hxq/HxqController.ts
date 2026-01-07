import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxq")
export default class HxqController {
  @operation({
    summary: "Get Hxq",
  })
  @get()
  static getHxq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxq",
  })
  @post("{id}")
  static createHxq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
