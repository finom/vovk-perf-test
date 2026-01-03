import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxs")
export default class HxsController {
  @operation({
    summary: "Get Hxs",
  })
  @get()
  static getHxs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxs",
  })
  @post("{id}")
  static createHxs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
