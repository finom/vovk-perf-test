import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfs")
export default class NfController {
  @operation({
    summary: "Get Nfs",
  })
  @get()
  static getNfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nf",
  })
  @post("{id}")
  static createNf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
