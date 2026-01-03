import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwzs")
export default class FwzController {
  @operation({
    summary: "Get Fwzs",
  })
  @get()
  static getFwzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwz",
  })
  @post("{id}")
  static createFwz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
