import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrw")
export default class NrwController {
  @operation({
    summary: "Get Nrw",
  })
  @get()
  static getNrw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrw",
  })
  @post("{id}")
  static createNrw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
