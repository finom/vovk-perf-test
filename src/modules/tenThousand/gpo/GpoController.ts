import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpos")
export default class GpoController {
  @operation({
    summary: "Get Gpos",
  })
  @get()
  static getGpos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpo",
  })
  @post("{id}")
  static createGpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
