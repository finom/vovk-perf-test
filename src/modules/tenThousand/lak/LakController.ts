import { procedure, prefix, get, post, operation } from "vovk";

@prefix("laks")
export default class LakController {
  @operation({
    summary: "Get Laks",
  })
  @get()
  static getLaks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lak",
  })
  @post("{id}")
  static createLak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
