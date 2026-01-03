import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfhs")
export default class NfhController {
  @operation({
    summary: "Get Nfhs",
  })
  @get()
  static getNfhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfh",
  })
  @post("{id}")
  static createNfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
