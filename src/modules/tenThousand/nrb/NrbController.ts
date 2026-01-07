import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrb")
export default class NrbController {
  @operation({
    summary: "Get Nrb",
  })
  @get()
  static getNrb = procedure({
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
