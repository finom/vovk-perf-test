import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byjs")
export default class ByjController {
  @operation({
    summary: "Get Byjs",
  })
  @get()
  static getByjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byj",
  })
  @post("{id}")
  static createByj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
