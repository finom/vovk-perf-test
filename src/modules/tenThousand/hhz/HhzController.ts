import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhzs")
export default class HhzController {
  @operation({
    summary: "Get Hhzs",
  })
  @get()
  static getHhzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhz",
  })
  @post("{id}")
  static createHhz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
