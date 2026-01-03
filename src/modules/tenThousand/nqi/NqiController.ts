import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqis")
export default class NqiController {
  @operation({
    summary: "Get Nqis",
  })
  @get()
  static getNqis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqi",
  })
  @post("{id}")
  static createNqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
