import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edrs")
export default class EdrController {
  @operation({
    summary: "Get Edrs",
  })
  @get()
  static getEdrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edr",
  })
  @post("{id}")
  static createEdr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
