import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwi")
export default class HwiController {
  @operation({
    summary: "Get Hwi",
  })
  @get()
  static getHwi = procedure({
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
