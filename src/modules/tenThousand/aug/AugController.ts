import { procedure, prefix, get, post, operation } from "vovk";

@prefix("augs")
export default class AugController {
  @operation({
    summary: "Get Augs",
  })
  @get()
  static getAugs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aug",
  })
  @post("{id}")
  static createAug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
