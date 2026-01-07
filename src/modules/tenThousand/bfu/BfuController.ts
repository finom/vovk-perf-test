import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfu")
export default class BfuController {
  @operation({
    summary: "Get Bfu",
  })
  @get()
  static getBfu = procedure({
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
