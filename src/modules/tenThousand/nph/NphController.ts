import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nphs")
export default class NphController {
  @operation({
    summary: "Get Nphs",
  })
  @get()
  static getNphs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nph",
  })
  @post("{id}")
  static createNph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
