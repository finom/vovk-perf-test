import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epts")
export default class EptController {
  @operation({
    summary: "Get Epts",
  })
  @get()
  static getEpts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ept",
  })
  @post("{id}")
  static createEpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
