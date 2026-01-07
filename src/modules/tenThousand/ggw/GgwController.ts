import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggw")
export default class GgwController {
  @operation({
    summary: "Get Ggw",
  })
  @get()
  static getGgw = procedure({
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
