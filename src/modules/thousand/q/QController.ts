import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qs")
export default class QController {
  @operation({
    summary: "Get QS",
  })
  @get()
  static getQS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Q",
  })
  @post("{id}")
  static createQ = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
