import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byj")
export default class ByjController {
  @operation({
    summary: "Get Byj",
  })
  @get()
  static getByj = procedure({
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
