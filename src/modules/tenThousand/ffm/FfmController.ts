import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffm")
export default class FfmController {
  @operation({
    summary: "Get Ffm",
  })
  @get()
  static getFfm = procedure({
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
