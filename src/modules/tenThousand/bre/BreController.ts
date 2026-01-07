import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bre")
export default class BreController {
  @operation({
    summary: "Get Bre",
  })
  @get()
  static getBre = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bre",
  })
  @post("{id}")
  static createBre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
