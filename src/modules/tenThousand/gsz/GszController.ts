import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gszs")
export default class GszController {
  @operation({
    summary: "Get Gszs",
  })
  @get()
  static getGszs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsz",
  })
  @post("{id}")
  static createGsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
