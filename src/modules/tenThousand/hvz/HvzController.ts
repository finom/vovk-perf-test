import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvzs")
export default class HvzController {
  @operation({
    summary: "Get Hvzs",
  })
  @get()
  static getHvzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvz",
  })
  @post("{id}")
  static createHvz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
