import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fha")
export default class FhaController {
  @operation({
    summary: "Get Fha",
  })
  @get()
  static getFha = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fha",
  })
  @post("{id}")
  static createFha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
