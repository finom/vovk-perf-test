import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrds")
export default class LrdController {
  @operation({
    summary: "Get Lrds",
  })
  @get()
  static getLrds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrd",
  })
  @post("{id}")
  static createLrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
