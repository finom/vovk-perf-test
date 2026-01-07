import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpd")
export default class DpdController {
  @operation({
    summary: "Get Dpd",
  })
  @get()
  static getDpd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpd",
  })
  @post("{id}")
  static createDpd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
