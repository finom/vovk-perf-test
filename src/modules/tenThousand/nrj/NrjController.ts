import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrjs")
export default class NrjController {
  @operation({
    summary: "Get Nrjs",
  })
  @get()
  static getNrjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrj",
  })
  @post("{id}")
  static createNrj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
