import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpm")
export default class GpmController {
  @operation({
    summary: "Get Gpm",
  })
  @get()
  static getGpm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpm",
  })
  @post("{id}")
  static createGpm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
