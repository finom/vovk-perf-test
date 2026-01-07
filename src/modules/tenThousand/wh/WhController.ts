import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wh")
export default class WhController {
  @operation({
    summary: "Get Wh",
  })
  @get()
  static getWh = procedure({
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
