import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cols")
export default class ColController {
  @operation({
    summary: "Get Cols",
  })
  @get()
  static getCols = procedure({
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
