import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gizs")
export default class GizController {
  @operation({
    summary: "Get Gizs",
  })
  @get()
  static getGizs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Giz",
  })
  @post("{id}")
  static createGiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
