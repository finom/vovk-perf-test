import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrrs")
export default class NrrController {
  @operation({
    summary: "Get Nrrs",
  })
  @get()
  static getNrrs = procedure({
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
