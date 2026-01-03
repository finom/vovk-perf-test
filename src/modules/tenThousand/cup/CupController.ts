import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cups")
export default class CupController {
  @operation({
    summary: "Get Cups",
  })
  @get()
  static getCups = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cup",
  })
  @post("{id}")
  static createCup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
