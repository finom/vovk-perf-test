import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyl")
export default class LylController {
  @operation({
    summary: "Get Lyl",
  })
  @get()
  static getLyl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyl",
  })
  @post("{id}")
  static createLyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
