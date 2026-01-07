import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mu")
export default class MuController {
  @operation({
    summary: "Get Mu",
  })
  @get()
  static getMu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mu",
  })
  @post("{id}")
  static createMu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
