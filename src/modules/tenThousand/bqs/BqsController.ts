import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqs")
export default class BqsController {
  @operation({
    summary: "Get Bqs",
  })
  @get()
  static getBqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqs",
  })
  @post("{id}")
  static createBqs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
