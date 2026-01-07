import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrm")
export default class NrmController {
  @operation({
    summary: "Get Nrm",
  })
  @get()
  static getNrm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrm",
  })
  @post("{id}")
  static createNrm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
