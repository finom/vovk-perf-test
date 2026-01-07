import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfj")
export default class NfjController {
  @operation({
    summary: "Get Nfj",
  })
  @get()
  static getNfj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfj",
  })
  @post("{id}")
  static createNfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
