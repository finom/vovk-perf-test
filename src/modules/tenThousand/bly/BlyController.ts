import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blies")
export default class BlyController {
  @operation({
    summary: "Get Blies",
  })
  @get()
  static getBlies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bly",
  })
  @post("{id}")
  static createBly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
