import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxh")
export default class BxhController {
  @operation({
    summary: "Get Bxh",
  })
  @get()
  static getBxh = procedure({
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
