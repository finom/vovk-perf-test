import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxis")
export default class BxiController {
  @operation({
    summary: "Get Bxis",
  })
  @get()
  static getBxis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxi",
  })
  @post("{id}")
  static createBxi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
