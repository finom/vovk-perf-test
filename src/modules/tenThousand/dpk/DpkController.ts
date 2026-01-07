import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpk")
export default class DpkController {
  @operation({
    summary: "Get Dpk",
  })
  @get()
  static getDpk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpk",
  })
  @post("{id}")
  static createDpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
