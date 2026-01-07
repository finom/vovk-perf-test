import { procedure, prefix, get, post, operation } from "vovk";

@prefix("him")
export default class HimController {
  @operation({
    summary: "Get Him",
  })
  @get()
  static getHim = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Him",
  })
  @post("{id}")
  static createHim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
