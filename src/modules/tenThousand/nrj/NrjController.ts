import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrj")
export default class NrjController {
  @operation({
    summary: "Get Nrj",
  })
  @get()
  static getNrj = procedure({
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
