import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxjs")
export default class BxjController {
  @operation({
    summary: "Get Bxjs",
  })
  @get()
  static getBxjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxj",
  })
  @post("{id}")
  static createBxj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
