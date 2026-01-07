import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nph")
export default class NphController {
  @operation({
    summary: "Get Nph",
  })
  @get()
  static getNph = procedure({
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
