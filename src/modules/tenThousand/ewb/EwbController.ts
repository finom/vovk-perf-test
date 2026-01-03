import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewbs")
export default class EwbController {
  @operation({
    summary: "Get Ewbs",
  })
  @get()
  static getEwbs = procedure({
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
