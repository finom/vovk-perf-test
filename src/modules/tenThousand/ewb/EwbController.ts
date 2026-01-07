import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewb")
export default class EwbController {
  @operation({
    summary: "Get Ewb",
  })
  @get()
  static getEwb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewb",
  })
  @post("{id}")
  static createEwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
