import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guts")
export default class GutController {
  @operation({
    summary: "Get Guts",
  })
  @get()
  static getGuts = procedure({
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
