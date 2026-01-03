import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jks")
export default class JkController {
  @operation({
    summary: "Get Jks",
  })
  @get()
  static getJks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jk",
  })
  @post("{id}")
  static createJk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
