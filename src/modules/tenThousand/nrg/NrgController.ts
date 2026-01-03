import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrgs")
export default class NrgController {
  @operation({
    summary: "Get Nrgs",
  })
  @get()
  static getNrgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrg",
  })
  @post("{id}")
  static createNrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
