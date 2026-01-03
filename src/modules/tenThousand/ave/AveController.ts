import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aves")
export default class AveController {
  @operation({
    summary: "Get Aves",
  })
  @get()
  static getAves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ave",
  })
  @post("{id}")
  static createAve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
