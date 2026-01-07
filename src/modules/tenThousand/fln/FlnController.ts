import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fln")
export default class FlnController {
  @operation({
    summary: "Get Fln",
  })
  @get()
  static getFln = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fln",
  })
  @post("{id}")
  static createFln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
