import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwbs")
export default class CwbController {
  @operation({
    summary: "Get Cwbs",
  })
  @get()
  static getCwbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwb",
  })
  @post("{id}")
  static createCwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
