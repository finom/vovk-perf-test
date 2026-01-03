import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcjs")
export default class HcjController {
  @operation({
    summary: "Get Hcjs",
  })
  @get()
  static getHcjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcj",
  })
  @post("{id}")
  static createHcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
