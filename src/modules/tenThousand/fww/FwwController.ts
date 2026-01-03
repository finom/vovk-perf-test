import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwws")
export default class FwwController {
  @operation({
    summary: "Get Fwws",
  })
  @get()
  static getFwws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fww",
  })
  @post("{id}")
  static createFww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
