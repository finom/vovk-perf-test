import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpy")
export default class HpyController {
  @operation({
    summary: "Get Hpy",
  })
  @get()
  static getHpy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpy",
  })
  @post("{id}")
  static createHpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
