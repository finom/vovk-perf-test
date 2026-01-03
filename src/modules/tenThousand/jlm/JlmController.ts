import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlms")
export default class JlmController {
  @operation({
    summary: "Get Jlms",
  })
  @get()
  static getJlms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlm",
  })
  @post("{id}")
  static createJlm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
