import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfks")
export default class HfkController {
  @operation({
    summary: "Get Hfks",
  })
  @get()
  static getHfks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfk",
  })
  @post("{id}")
  static createHfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
