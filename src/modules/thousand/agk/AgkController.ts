import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agks")
export default class AgkController {
  @operation({
    summary: "Get Agks",
  })
  @get()
  static getAgks = procedure({
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
