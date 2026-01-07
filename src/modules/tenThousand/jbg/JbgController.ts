import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbg")
export default class JbgController {
  @operation({
    summary: "Get Jbg",
  })
  @get()
  static getJbg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbg",
  })
  @post("{id}")
  static createJbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
