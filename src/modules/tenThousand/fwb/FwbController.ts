import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwbs")
export default class FwbController {
  @operation({
    summary: "Get Fwbs",
  })
  @get()
  static getFwbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwb",
  })
  @post("{id}")
  static createFwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
