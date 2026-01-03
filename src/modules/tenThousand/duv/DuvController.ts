import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duvs")
export default class DuvController {
  @operation({
    summary: "Get Duvs",
  })
  @get()
  static getDuvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Duv",
  })
  @post("{id}")
  static createDuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
