import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxk")
export default class BxkController {
  @operation({
    summary: "Get Bxk",
  })
  @get()
  static getBxk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxk",
  })
  @post("{id}")
  static createBxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
