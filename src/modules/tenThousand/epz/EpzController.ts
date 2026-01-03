import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epzs")
export default class EpzController {
  @operation({
    summary: "Get Epzs",
  })
  @get()
  static getEpzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epz",
  })
  @post("{id}")
  static createEpz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
