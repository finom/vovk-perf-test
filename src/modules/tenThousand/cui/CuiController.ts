import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cui")
export default class CuiController {
  @operation({
    summary: "Get Cui",
  })
  @get()
  static getCui = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cui",
  })
  @post("{id}")
  static createCui = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
