import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfrs")
export default class NfrController {
  @operation({
    summary: "Get Nfrs",
  })
  @get()
  static getNfrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfr",
  })
  @post("{id}")
  static createNfr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
