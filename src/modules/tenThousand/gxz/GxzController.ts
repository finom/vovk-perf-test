import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxz")
export default class GxzController {
  @operation({
    summary: "Get Gxz",
  })
  @get()
  static getGxz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxz",
  })
  @post("{id}")
  static createGxz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
