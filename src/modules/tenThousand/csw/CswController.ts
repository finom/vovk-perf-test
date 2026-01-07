import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csw")
export default class CswController {
  @operation({
    summary: "Get Csw",
  })
  @get()
  static getCsw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csw",
  })
  @post("{id}")
  static createCsw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
