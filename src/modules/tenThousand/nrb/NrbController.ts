import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrbs")
export default class NrbController {
  @operation({
    summary: "Get Nrbs",
  })
  @get()
  static getNrbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrb",
  })
  @post("{id}")
  static createNrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
