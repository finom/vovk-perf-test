import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxhs")
export default class BxhController {
  @operation({
    summary: "Get Bxhs",
  })
  @get()
  static getBxhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxh",
  })
  @post("{id}")
  static createBxh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
