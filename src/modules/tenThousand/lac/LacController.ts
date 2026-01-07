import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lac")
export default class LacController {
  @operation({
    summary: "Get Lac",
  })
  @get()
  static getLac = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lac",
  })
  @post("{id}")
  static createLac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
