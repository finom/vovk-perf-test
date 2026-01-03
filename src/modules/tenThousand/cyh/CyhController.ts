import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyhs")
export default class CyhController {
  @operation({
    summary: "Get Cyhs",
  })
  @get()
  static getCyhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyh",
  })
  @post("{id}")
  static createCyh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
