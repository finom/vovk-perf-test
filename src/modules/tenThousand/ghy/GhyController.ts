import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghies")
export default class GhyController {
  @operation({
    summary: "Get Ghies",
  })
  @get()
  static getGhies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghy",
  })
  @post("{id}")
  static createGhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
