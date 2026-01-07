import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldj")
export default class LdjController {
  @operation({
    summary: "Get Ldj",
  })
  @get()
  static getLdj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldj",
  })
  @post("{id}")
  static createLdj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
