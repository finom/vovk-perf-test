import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yqs")
export default class YqController {
  @operation({
    summary: "Get Yqs",
  })
  @get()
  static getYqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yq",
  })
  @post("{id}")
  static createYq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
