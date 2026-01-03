import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrns")
export default class LrnController {
  @operation({
    summary: "Get Lrns",
  })
  @get()
  static getLrns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrn",
  })
  @post("{id}")
  static createLrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
