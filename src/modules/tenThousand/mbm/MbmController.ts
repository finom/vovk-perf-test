import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbm")
export default class MbmController {
  @operation({
    summary: "Get Mbm",
  })
  @get()
  static getMbm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbm",
  })
  @post("{id}")
  static createMbm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
