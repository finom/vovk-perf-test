import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csps")
export default class CspController {
  @operation({
    summary: "Get Csps",
  })
  @get()
  static getCsps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csp",
  })
  @post("{id}")
  static createCsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
