import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbv")
export default class JbvController {
  @operation({
    summary: "Get Jbv",
  })
  @get()
  static getJbv = procedure({
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
