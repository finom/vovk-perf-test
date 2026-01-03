import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlies")
export default class DlyController {
  @operation({
    summary: "Get Dlies",
  })
  @get()
  static getDlies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dly",
  })
  @post("{id}")
  static createDly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
