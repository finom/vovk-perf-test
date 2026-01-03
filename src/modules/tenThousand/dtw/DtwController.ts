import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtws")
export default class DtwController {
  @operation({
    summary: "Get Dtws",
  })
  @get()
  static getDtws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtw",
  })
  @post("{id}")
  static createDtw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
