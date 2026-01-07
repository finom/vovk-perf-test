import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrm")
export default class LrmController {
  @operation({
    summary: "Get Lrm",
  })
  @get()
  static getLrm = procedure({
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
