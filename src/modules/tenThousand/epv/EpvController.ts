import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epv")
export default class EpvController {
  @operation({
    summary: "Get Epv",
  })
  @get()
  static getEpv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epv",
  })
  @post("{id}")
  static createEpv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
