import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltis")
export default class LtiController {
  @operation({
    summary: "Get Ltis",
  })
  @get()
  static getLtis = procedure({
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
