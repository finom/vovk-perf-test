import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wqs")
export default class WqController {
  @operation({
    summary: "Get Wqs",
  })
  @get()
  static getWqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wq",
  })
  @post("{id}")
  static createWq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
