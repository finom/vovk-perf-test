import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhqs")
export default class LhqController {
  @operation({
    summary: "Get Lhqs",
  })
  @get()
  static getLhqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhq",
  })
  @post("{id}")
  static createLhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
