import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrks")
export default class LrkController {
  @operation({
    summary: "Get Lrks",
  })
  @get()
  static getLrks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrk",
  })
  @post("{id}")
  static createLrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
