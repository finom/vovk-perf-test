import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpq")
export default class DpqController {
  @operation({
    summary: "Get Dpq",
  })
  @get()
  static getDpq = procedure({
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
