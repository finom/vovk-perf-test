import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwz")
export default class FwzController {
  @operation({
    summary: "Get Fwz",
  })
  @get()
  static getFwz = procedure({
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
