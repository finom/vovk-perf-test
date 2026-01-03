import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mles")
export default class MleController {
  @operation({
    summary: "Get Mles",
  })
  @get()
  static getMles = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mle",
  })
  @post("{id}")
  static createMle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
