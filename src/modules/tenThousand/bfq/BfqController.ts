import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfq")
export default class BfqController {
  @operation({
    summary: "Get Bfq",
  })
  @get()
  static getBfq = procedure({
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
