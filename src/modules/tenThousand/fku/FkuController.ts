import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fku")
export default class FkuController {
  @operation({
    summary: "Get Fku",
  })
  @get()
  static getFku = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fku",
  })
  @post("{id}")
  static createFku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
