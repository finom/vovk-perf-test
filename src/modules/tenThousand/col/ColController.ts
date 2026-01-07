import { procedure, prefix, get, post, operation } from "vovk";

@prefix("col")
export default class ColController {
  @operation({
    summary: "Get Col",
  })
  @get()
  static getCol = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Col",
  })
  @post("{id}")
  static createCol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
