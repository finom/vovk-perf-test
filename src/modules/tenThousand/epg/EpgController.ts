import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epg")
export default class EpgController {
  @operation({
    summary: "Get Epg",
  })
  @get()
  static getEpg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epg",
  })
  @post("{id}")
  static createEpg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
