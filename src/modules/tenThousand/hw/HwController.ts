import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hws")
export default class HwController {
  @operation({
    summary: "Get Hws",
  })
  @get()
  static getHws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hw",
  })
  @post("{id}")
  static createHw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
