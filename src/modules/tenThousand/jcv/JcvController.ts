import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcv")
export default class JcvController {
  @operation({
    summary: "Get Jcv",
  })
  @get()
  static getJcv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcv",
  })
  @post("{id}")
  static createJcv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
