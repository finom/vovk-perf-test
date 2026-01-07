import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csp")
export default class CspController {
  @operation({
    summary: "Get Csp",
  })
  @get()
  static getCsp = procedure({
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
