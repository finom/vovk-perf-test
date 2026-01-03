import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkqs")
export default class BkqController {
  @operation({
    summary: "Get Bkqs",
  })
  @get()
  static getBkqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkq",
  })
  @post("{id}")
  static createBkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
