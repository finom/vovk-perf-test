import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrn")
export default class NrnController {
  @operation({
    summary: "Get Nrn",
  })
  @get()
  static getNrn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrn",
  })
  @post("{id}")
  static createNrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
