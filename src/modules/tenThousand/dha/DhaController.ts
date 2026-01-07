import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dha")
export default class DhaController {
  @operation({
    summary: "Get Dha",
  })
  @get()
  static getDha = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dha",
  })
  @post("{id}")
  static createDha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
