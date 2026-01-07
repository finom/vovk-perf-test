import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfv")
export default class HfvController {
  @operation({
    summary: "Get Hfv",
  })
  @get()
  static getHfv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfv",
  })
  @post("{id}")
  static createHfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
