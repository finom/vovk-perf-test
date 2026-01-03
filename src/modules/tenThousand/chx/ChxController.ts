import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chxes")
export default class ChxController {
  @operation({
    summary: "Get Chxes",
  })
  @get()
  static getChxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chx",
  })
  @post("{id}")
  static createChx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
