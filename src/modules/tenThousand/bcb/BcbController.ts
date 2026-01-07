import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcb")
export default class BcbController {
  @operation({
    summary: "Get Bcb",
  })
  @get()
  static getBcb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcb",
  })
  @post("{id}")
  static createBcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
