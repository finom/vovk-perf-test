import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfws")
export default class NfwController {
  @operation({
    summary: "Get Nfws",
  })
  @get()
  static getNfws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfw",
  })
  @post("{id}")
  static createNfw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
