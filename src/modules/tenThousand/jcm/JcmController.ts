import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcms")
export default class JcmController {
  @operation({
    summary: "Get Jcms",
  })
  @get()
  static getJcms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcm",
  })
  @post("{id}")
  static createJcm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
