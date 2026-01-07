import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nba")
export default class NbaController {
  @operation({
    summary: "Get Nba",
  })
  @get()
  static getNba = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nba",
  })
  @post("{id}")
  static createNba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
