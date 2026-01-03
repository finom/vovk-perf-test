import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agvs")
export default class AgvController {
  @operation({
    summary: "Get Agvs",
  })
  @get()
  static getAgvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agv",
  })
  @post("{id}")
  static createAgv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
