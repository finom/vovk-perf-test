import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyds")
export default class CydController {
  @operation({
    summary: "Get Cyds",
  })
  @get()
  static getCyds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyd",
  })
  @post("{id}")
  static createCyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
