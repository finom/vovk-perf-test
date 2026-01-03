import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jows")
export default class JowController {
  @operation({
    summary: "Get Jows",
  })
  @get()
  static getJows = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jow",
  })
  @post("{id}")
  static createJow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
