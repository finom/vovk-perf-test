import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hats")
export default class HatController {
  @operation({
    summary: "Get Hats",
  })
  @get()
  static getHats = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hat",
  })
  @post("{id}")
  static createHat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
