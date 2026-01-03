import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdqs")
export default class HdqController {
  @operation({
    summary: "Get Hdqs",
  })
  @get()
  static getHdqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdq",
  })
  @post("{id}")
  static createHdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
