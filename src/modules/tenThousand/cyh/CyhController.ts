import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyh")
export default class CyhController {
  @operation({
    summary: "Get Cyh",
  })
  @get()
  static getCyh = procedure({
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
