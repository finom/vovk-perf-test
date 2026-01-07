import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gut")
export default class GutController {
  @operation({
    summary: "Get Gut",
  })
  @get()
  static getGut = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gut",
  })
  @post("{id}")
  static createGut = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
