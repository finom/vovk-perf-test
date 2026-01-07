import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bha")
export default class BhaController {
  @operation({
    summary: "Get Bha",
  })
  @get()
  static getBha = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bha",
  })
  @post("{id}")
  static createBha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
