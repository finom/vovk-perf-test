import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgns")
export default class KgnController {
  @operation({
    summary: "Get Kgns",
  })
  @get()
  static getKgns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgn",
  })
  @post("{id}")
  static createKgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
