import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwl")
export default class FwlController {
  @operation({
    summary: "Get Fwl",
  })
  @get()
  static getFwl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwl",
  })
  @post("{id}")
  static createFwl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
