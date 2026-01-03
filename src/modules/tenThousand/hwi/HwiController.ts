import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwis")
export default class HwiController {
  @operation({
    summary: "Get Hwis",
  })
  @get()
  static getHwis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwi",
  })
  @post("{id}")
  static createHwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
