import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duv")
export default class DuvController {
  @operation({
    summary: "Get Duv",
  })
  @get()
  static getDuv = procedure({
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
