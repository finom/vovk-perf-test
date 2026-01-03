import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaks")
export default class GakController {
  @operation({
    summary: "Get Gaks",
  })
  @get()
  static getGaks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gak",
  })
  @post("{id}")
  static createGak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
