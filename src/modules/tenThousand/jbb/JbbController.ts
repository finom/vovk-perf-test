import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbb")
export default class JbbController {
  @operation({
    summary: "Get Jbb",
  })
  @get()
  static getJbb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbb",
  })
  @post("{id}")
  static createJbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
