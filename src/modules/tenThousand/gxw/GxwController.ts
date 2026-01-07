import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxw")
export default class GxwController {
  @operation({
    summary: "Get Gxw",
  })
  @get()
  static getGxw = procedure({
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
