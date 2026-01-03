import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxbs")
export default class BxbController {
  @operation({
    summary: "Get Bxbs",
  })
  @get()
  static getBxbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxb",
  })
  @post("{id}")
  static createBxb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
