import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lti")
export default class LtiController {
  @operation({
    summary: "Get Lti",
  })
  @get()
  static getLti = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lti",
  })
  @post("{id}")
  static createLti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
