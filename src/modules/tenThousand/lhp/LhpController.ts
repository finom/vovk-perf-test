import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhp")
export default class LhpController {
  @operation({
    summary: "Get Lhp",
  })
  @get()
  static getLhp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhp",
  })
  @post("{id}")
  static createLhp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
