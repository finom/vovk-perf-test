import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewts")
export default class EwtController {
  @operation({
    summary: "Get Ewts",
  })
  @get()
  static getEwts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewt",
  })
  @post("{id}")
  static createEwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
