import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epz")
export default class EpzController {
  @operation({
    summary: "Get Epz",
  })
  @get()
  static getEpz = procedure({
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
