import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuvs")
export default class FuvController {
  @operation({
    summary: "Get Fuvs",
  })
  @get()
  static getFuvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fuv",
  })
  @post("{id}")
  static createFuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
