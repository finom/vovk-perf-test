import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foqs")
export default class FoqController {
  @operation({
    summary: "Get Foqs",
  })
  @get()
  static getFoqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Foq",
  })
  @post("{id}")
  static createFoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
