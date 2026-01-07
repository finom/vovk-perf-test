import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hat")
export default class HatController {
  @operation({
    summary: "Get Hat",
  })
  @get()
  static getHat = procedure({
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
