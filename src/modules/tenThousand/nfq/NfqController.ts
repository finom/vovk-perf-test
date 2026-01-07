import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfq")
export default class NfqController {
  @operation({
    summary: "Get Nfq",
  })
  @get()
  static getNfq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfq",
  })
  @post("{id}")
  static createNfq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
