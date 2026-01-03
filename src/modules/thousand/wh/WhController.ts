import { procedure, prefix, get, post, operation } from "vovk";

@prefix("whs")
export default class WhController {
  @operation({
    summary: "Get Whs",
  })
  @get()
  static getWhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wh",
  })
  @post("{id}")
  static createWh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
