import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrms")
export default class LrmController {
  @operation({
    summary: "Get Lrms",
  })
  @get()
  static getLrms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrm",
  })
  @post("{id}")
  static createLrm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
