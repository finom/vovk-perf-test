import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agk")
export default class AgkController {
  @operation({
    summary: "Get Agk",
  })
  @get()
  static getAgk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agk",
  })
  @post("{id}")
  static createAgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
