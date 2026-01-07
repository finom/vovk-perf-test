import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcb")
export default class JcbController {
  @operation({
    summary: "Get Jcb",
  })
  @get()
  static getJcb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcb",
  })
  @post("{id}")
  static createJcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
