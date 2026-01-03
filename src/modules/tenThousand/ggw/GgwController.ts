import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggws")
export default class GgwController {
  @operation({
    summary: "Get Ggws",
  })
  @get()
  static getGgws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggw",
  })
  @post("{id}")
  static createGgw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
