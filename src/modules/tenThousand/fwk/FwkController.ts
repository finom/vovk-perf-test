import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwk")
export default class FwkController {
  @operation({
    summary: "Get Fwk",
  })
  @get()
  static getFwk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwk",
  })
  @post("{id}")
  static createFwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
