import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewz")
export default class EwzController {
  @operation({
    summary: "Get Ewz",
  })
  @get()
  static getEwz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewz",
  })
  @post("{id}")
  static createEwz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
