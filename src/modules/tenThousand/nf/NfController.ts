import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nf")
export default class NfController {
  @operation({
    summary: "Get Nf",
  })
  @get()
  static getNf = procedure({
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
