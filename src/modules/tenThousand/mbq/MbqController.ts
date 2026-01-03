import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbqs")
export default class MbqController {
  @operation({
    summary: "Get Mbqs",
  })
  @get()
  static getMbqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbq",
  })
  @post("{id}")
  static createMbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
