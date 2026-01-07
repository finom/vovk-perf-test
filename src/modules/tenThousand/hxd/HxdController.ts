import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxd")
export default class HxdController {
  @operation({
    summary: "Get Hxd",
  })
  @get()
  static getHxd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxd",
  })
  @post("{id}")
  static createHxd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
