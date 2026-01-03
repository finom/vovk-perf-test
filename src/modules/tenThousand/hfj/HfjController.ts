import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfjs")
export default class HfjController {
  @operation({
    summary: "Get Hfjs",
  })
  @get()
  static getHfjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfj",
  })
  @post("{id}")
  static createHfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
