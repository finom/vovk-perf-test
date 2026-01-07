import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hv")
export default class HvController {
  @operation({
    summary: "Get Hv",
  })
  @get()
  static getHv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hv",
  })
  @post("{id}")
  static createHv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
