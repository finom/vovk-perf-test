import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cps")
export default class CpsController {
  @operation({
    summary: "Get Cps",
  })
  @get()
  static getCps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cps",
  })
  @post("{id}")
  static createCps = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
