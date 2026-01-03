import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrks")
export default class JrkController {
  @operation({
    summary: "Get Jrks",
  })
  @get()
  static getJrks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrk",
  })
  @post("{id}")
  static createJrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
