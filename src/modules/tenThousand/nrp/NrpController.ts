import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrps")
export default class NrpController {
  @operation({
    summary: "Get Nrps",
  })
  @get()
  static getNrps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrp",
  })
  @post("{id}")
  static createNrp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
