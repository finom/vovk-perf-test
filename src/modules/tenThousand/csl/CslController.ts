import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csls")
export default class CslController {
  @operation({
    summary: "Get Csls",
  })
  @get()
  static getCsls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csl",
  })
  @post("{id}")
  static createCsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
