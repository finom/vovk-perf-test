import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elo")
export default class EloController {
  @operation({
    summary: "Get Elo",
  })
  @get()
  static getElo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elo",
  })
  @post("{id}")
  static createElo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
