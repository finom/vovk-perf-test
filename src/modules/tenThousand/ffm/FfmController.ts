import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffms")
export default class FfmController {
  @operation({
    summary: "Get Ffms",
  })
  @get()
  static getFfms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffm",
  })
  @post("{id}")
  static createFfm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
