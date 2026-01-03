import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqms")
export default class NqmController {
  @operation({
    summary: "Get Nqms",
  })
  @get()
  static getNqms = procedure({
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
