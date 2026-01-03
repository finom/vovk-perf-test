import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfns")
export default class MfnController {
  @operation({
    summary: "Get Mfns",
  })
  @get()
  static getMfns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfn",
  })
  @post("{id}")
  static createMfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
