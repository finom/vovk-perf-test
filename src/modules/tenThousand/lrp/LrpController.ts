import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrp")
export default class LrpController {
  @operation({
    summary: "Get Lrp",
  })
  @get()
  static getLrp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrp",
  })
  @post("{id}")
  static createLrp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
