import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrx")
export default class NrxController {
  @operation({
    summary: "Get Nrx",
  })
  @get()
  static getNrx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrx",
  })
  @post("{id}")
  static createNrx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
