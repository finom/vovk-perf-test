import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcgs")
export default class JcgController {
  @operation({
    summary: "Get Jcgs",
  })
  @get()
  static getJcgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcg",
  })
  @post("{id}")
  static createJcg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
