import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foi")
export default class FoiController {
  @operation({
    summary: "Get Foi",
  })
  @get()
  static getFoi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Foi",
  })
  @post("{id}")
  static createFoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
