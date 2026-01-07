import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpp")
export default class JppController {
  @operation({
    summary: "Get Jpp",
  })
  @get()
  static getJpp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpp",
  })
  @post("{id}")
  static createJpp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
