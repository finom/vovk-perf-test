import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcx")
export default class JcxController {
  @operation({
    summary: "Get Jcx",
  })
  @get()
  static getJcx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcx",
  })
  @post("{id}")
  static createJcx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
