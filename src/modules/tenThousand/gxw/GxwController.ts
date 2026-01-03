import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxws")
export default class GxwController {
  @operation({
    summary: "Get Gxws",
  })
  @get()
  static getGxws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxw",
  })
  @post("{id}")
  static createGxw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
