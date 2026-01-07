import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chw")
export default class ChwController {
  @operation({
    summary: "Get Chw",
  })
  @get()
  static getChw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chw",
  })
  @post("{id}")
  static createChw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
