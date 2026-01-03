import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfus")
export default class BfuController {
  @operation({
    summary: "Get Bfus",
  })
  @get()
  static getBfus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfu",
  })
  @post("{id}")
  static createBfu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
