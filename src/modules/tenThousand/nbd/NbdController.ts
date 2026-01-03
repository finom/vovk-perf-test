import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbds")
export default class NbdController {
  @operation({
    summary: "Get Nbds",
  })
  @get()
  static getNbds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbd",
  })
  @post("{id}")
  static createNbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
