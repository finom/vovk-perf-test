import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csq")
export default class CsqController {
  @operation({
    summary: "Get Csq",
  })
  @get()
  static getCsq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csq",
  })
  @post("{id}")
  static createCsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
