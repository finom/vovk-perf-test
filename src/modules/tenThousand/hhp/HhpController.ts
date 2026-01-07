import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhp")
export default class HhpController {
  @operation({
    summary: "Get Hhp",
  })
  @get()
  static getHhp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhp",
  })
  @post("{id}")
  static createHhp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
