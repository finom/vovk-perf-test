import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffp")
export default class FfpController {
  @operation({
    summary: "Get Ffp",
  })
  @get()
  static getFfp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffp",
  })
  @post("{id}")
  static createFfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
