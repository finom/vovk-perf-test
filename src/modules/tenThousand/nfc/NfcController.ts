import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfc")
export default class NfcController {
  @operation({
    summary: "Get Nfc",
  })
  @get()
  static getNfc = procedure({
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
