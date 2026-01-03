import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxqs")
export default class GxqController {
  @operation({
    summary: "Get Gxqs",
  })
  @get()
  static getGxqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxq",
  })
  @post("{id}")
  static createGxq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
