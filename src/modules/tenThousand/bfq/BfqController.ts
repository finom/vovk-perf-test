import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfqs")
export default class BfqController {
  @operation({
    summary: "Get Bfqs",
  })
  @get()
  static getBfqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfq",
  })
  @post("{id}")
  static createBfq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
