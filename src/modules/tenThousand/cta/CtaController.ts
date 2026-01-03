import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctas")
export default class CtaController {
  @operation({
    summary: "Get Ctas",
  })
  @get()
  static getCtas = procedure({
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
