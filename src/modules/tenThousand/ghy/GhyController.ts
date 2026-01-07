import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghy")
export default class GhyController {
  @operation({
    summary: "Get Ghy",
  })
  @get()
  static getGhy = procedure({
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
