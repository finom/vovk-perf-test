import { procedure, prefix, get, post, operation } from "vovk";

@prefix("havs")
export default class HavController {
  @operation({
    summary: "Get Havs",
  })
  @get()
  static getHavs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hav",
  })
  @post("{id}")
  static createHav = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
