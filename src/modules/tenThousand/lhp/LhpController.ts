import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhps")
export default class LhpController {
  @operation({
    summary: "Get Lhps",
  })
  @get()
  static getLhps = procedure({
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
