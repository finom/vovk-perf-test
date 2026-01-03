import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epks")
export default class EpkController {
  @operation({
    summary: "Get Epks",
  })
  @get()
  static getEpks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epk",
  })
  @post("{id}")
  static createEpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
