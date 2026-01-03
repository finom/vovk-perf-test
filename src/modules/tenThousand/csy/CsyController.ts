import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csies")
export default class CsyController {
  @operation({
    summary: "Get Csies",
  })
  @get()
  static getCsies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csy",
  })
  @post("{id}")
  static createCsy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
