import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehzs")
export default class EhzController {
  @operation({
    summary: "Get Ehzs",
  })
  @get()
  static getEhzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehz",
  })
  @post("{id}")
  static createEhz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
