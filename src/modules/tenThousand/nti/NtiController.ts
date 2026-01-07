import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nti")
export default class NtiController {
  @operation({
    summary: "Get Nti",
  })
  @get()
  static getNti = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nti",
  })
  @post("{id}")
  static createNti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
