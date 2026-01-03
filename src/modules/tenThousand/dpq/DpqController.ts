import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpqs")
export default class DpqController {
  @operation({
    summary: "Get Dpqs",
  })
  @get()
  static getDpqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpq",
  })
  @post("{id}")
  static createDpq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
