import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxi")
export default class BxiController {
  @operation({
    summary: "Get Bxi",
  })
  @get()
  static getBxi = procedure({
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
