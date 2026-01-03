import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cms")
export default class CmController {
  @operation({
    summary: "Get Cms",
  })
  @get()
  static getCms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cm",
  })
  @post("{id}")
  static createCm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
