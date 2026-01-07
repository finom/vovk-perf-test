import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfr")
export default class HfrController {
  @operation({
    summary: "Get Hfr",
  })
  @get()
  static getHfr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfr",
  })
  @post("{id}")
  static createHfr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
