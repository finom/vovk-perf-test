import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwb")
export default class CwbController {
  @operation({
    summary: "Get Cwb",
  })
  @get()
  static getCwb = procedure({
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
