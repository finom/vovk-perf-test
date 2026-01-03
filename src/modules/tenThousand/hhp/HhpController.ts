import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhps")
export default class HhpController {
  @operation({
    summary: "Get Hhps",
  })
  @get()
  static getHhps = procedure({
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
