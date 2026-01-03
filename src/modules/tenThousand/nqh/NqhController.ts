import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqhs")
export default class NqhController {
  @operation({
    summary: "Get Nqhs",
  })
  @get()
  static getNqhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqh",
  })
  @post("{id}")
  static createNqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
