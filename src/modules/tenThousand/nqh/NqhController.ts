import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqh")
export default class NqhController {
  @operation({
    summary: "Get Nqh",
  })
  @get()
  static getNqh = procedure({
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
