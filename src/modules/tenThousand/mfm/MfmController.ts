import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfms")
export default class MfmController {
  @operation({
    summary: "Get Mfms",
  })
  @get()
  static getMfms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfm",
  })
  @post("{id}")
  static createMfm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
