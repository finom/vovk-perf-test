import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffns")
export default class FfnController {
  @operation({
    summary: "Get Ffns",
  })
  @get()
  static getFfns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffn",
  })
  @post("{id}")
  static createFfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
