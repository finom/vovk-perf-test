import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxg")
export default class GxgController {
  @operation({
    summary: "Get Gxg",
  })
  @get()
  static getGxg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxg",
  })
  @post("{id}")
  static createGxg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
