import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyys")
export default class CyyController {
  @operation({
    summary: "Get Cyys",
  })
  @get()
  static getCyys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyy",
  })
  @post("{id}")
  static createCyy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
