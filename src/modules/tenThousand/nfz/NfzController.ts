import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfzs")
export default class NfzController {
  @operation({
    summary: "Get Nfzs",
  })
  @get()
  static getNfzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfz",
  })
  @post("{id}")
  static createNfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
