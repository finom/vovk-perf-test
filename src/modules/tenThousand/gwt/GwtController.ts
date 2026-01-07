import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwt")
export default class GwtController {
  @operation({
    summary: "Get Gwt",
  })
  @get()
  static getGwt = procedure({
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
