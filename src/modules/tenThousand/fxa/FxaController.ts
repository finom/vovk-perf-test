import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxa")
export default class FxaController {
  @operation({
    summary: "Get Fxa",
  })
  @get()
  static getFxa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxa",
  })
  @post("{id}")
  static createFxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
