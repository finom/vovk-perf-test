import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlns")
export default class NlnController {
  @operation({
    summary: "Get Nlns",
  })
  @get()
  static getNlns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nln",
  })
  @post("{id}")
  static createNln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
