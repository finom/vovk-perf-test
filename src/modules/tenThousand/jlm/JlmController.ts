import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlm")
export default class JlmController {
  @operation({
    summary: "Get Jlm",
  })
  @get()
  static getJlm = procedure({
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
