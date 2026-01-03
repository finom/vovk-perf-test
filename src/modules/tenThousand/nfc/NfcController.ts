import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfcs")
export default class NfcController {
  @operation({
    summary: "Get Nfcs",
  })
  @get()
  static getNfcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfc",
  })
  @post("{id}")
  static createNfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
