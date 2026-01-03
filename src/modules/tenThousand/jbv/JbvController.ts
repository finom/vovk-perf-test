import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbvs")
export default class JbvController {
  @operation({
    summary: "Get Jbvs",
  })
  @get()
  static getJbvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbv",
  })
  @post("{id}")
  static createJbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
