import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mle")
export default class MleController {
  @operation({
    summary: "Get Mle",
  })
  @get()
  static getMle = procedure({
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
