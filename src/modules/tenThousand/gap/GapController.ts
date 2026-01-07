import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gap")
export default class GapController {
  @operation({
    summary: "Get Gap",
  })
  @get()
  static getGap = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gap",
  })
  @post("{id}")
  static createGap = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
