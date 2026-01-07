import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blz")
export default class BlzController {
  @operation({
    summary: "Get Blz",
  })
  @get()
  static getBlz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blz",
  })
  @post("{id}")
  static createBlz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
