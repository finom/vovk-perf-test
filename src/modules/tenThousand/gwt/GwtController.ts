import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwts")
export default class GwtController {
  @operation({
    summary: "Get Gwts",
  })
  @get()
  static getGwts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwt",
  })
  @post("{id}")
  static createGwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
