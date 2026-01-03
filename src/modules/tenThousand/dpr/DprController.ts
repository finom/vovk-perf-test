import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dprs")
export default class DprController {
  @operation({
    summary: "Get Dprs",
  })
  @get()
  static getDprs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpr",
  })
  @post("{id}")
  static createDpr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
