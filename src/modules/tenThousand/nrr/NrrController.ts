import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrr")
export default class NrrController {
  @operation({
    summary: "Get Nrr",
  })
  @get()
  static getNrr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrr",
  })
  @post("{id}")
  static createNrr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
