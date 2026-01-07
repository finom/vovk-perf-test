import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cta")
export default class CtaController {
  @operation({
    summary: "Get Cta",
  })
  @get()
  static getCta = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cta",
  })
  @post("{id}")
  static createCta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
