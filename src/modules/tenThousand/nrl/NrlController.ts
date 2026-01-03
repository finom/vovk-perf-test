import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrls")
export default class NrlController {
  @operation({
    summary: "Get Nrls",
  })
  @get()
  static getNrls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrl",
  })
  @post("{id}")
  static createNrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
