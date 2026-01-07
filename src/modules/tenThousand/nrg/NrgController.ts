import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrg")
export default class NrgController {
  @operation({
    summary: "Get Nrg",
  })
  @get()
  static getNrg = procedure({
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
