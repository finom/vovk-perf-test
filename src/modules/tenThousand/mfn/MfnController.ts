import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfn")
export default class MfnController {
  @operation({
    summary: "Get Mfn",
  })
  @get()
  static getMfn = procedure({
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
