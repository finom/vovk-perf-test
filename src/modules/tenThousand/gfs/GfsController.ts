import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfs")
export default class GfsController {
  @operation({
    summary: "Get Gfs",
  })
  @get()
  static getGfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfs",
  })
  @post("{id}")
  static createGfs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
