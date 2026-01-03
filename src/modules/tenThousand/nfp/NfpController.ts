import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfps")
export default class NfpController {
  @operation({
    summary: "Get Nfps",
  })
  @get()
  static getNfps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfp",
  })
  @post("{id}")
  static createNfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
