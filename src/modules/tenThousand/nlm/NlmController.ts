import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlm")
export default class NlmController {
  @operation({
    summary: "Get Nlm",
  })
  @get()
  static getNlm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlm",
  })
  @post("{id}")
  static createNlm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
