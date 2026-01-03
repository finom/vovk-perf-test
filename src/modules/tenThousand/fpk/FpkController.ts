import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpks")
export default class FpkController {
  @operation({
    summary: "Get Fpks",
  })
  @get()
  static getFpks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpk",
  })
  @post("{id}")
  static createFpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
