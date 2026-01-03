import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyks")
export default class CykController {
  @operation({
    summary: "Get Cyks",
  })
  @get()
  static getCyks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyk",
  })
  @post("{id}")
  static createCyk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
