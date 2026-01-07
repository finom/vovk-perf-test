import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxa")
export default class GxaController {
  @operation({
    summary: "Get Gxa",
  })
  @get()
  static getGxa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxa",
  })
  @post("{id}")
  static createGxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
