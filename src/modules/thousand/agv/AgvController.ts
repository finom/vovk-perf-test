import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agv")
export default class AgvController {
  @operation({
    summary: "Get Agv",
  })
  @get()
  static getAgv = procedure({
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
