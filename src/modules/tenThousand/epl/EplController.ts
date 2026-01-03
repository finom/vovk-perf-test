import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epls")
export default class EplController {
  @operation({
    summary: "Get Epls",
  })
  @get()
  static getEpls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epl",
  })
  @post("{id}")
  static createEpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
