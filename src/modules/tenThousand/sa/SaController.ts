import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sa")
export default class SaController {
  @operation({
    summary: "Get Sa",
  })
  @get()
  static getSa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sa",
  })
  @post("{id}")
  static createSa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
