import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihz")
export default class IhzController {
  @operation({
    summary: "Get Ihz",
  })
  @get()
  static getIhz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihz",
  })
  @post("{id}")
  static createIhz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
