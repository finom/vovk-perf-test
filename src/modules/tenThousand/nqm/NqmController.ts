import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqm")
export default class NqmController {
  @operation({
    summary: "Get Nqm",
  })
  @get()
  static getNqm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqm",
  })
  @post("{id}")
  static createNqm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
