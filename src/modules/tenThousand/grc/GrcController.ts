import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grcs")
export default class GrcController {
  @operation({
    summary: "Get Grcs",
  })
  @get()
  static getGrcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grc",
  })
  @post("{id}")
  static createGrc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
