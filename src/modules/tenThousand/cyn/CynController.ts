import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyns")
export default class CynController {
  @operation({
    summary: "Get Cyns",
  })
  @get()
  static getCyns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyn",
  })
  @post("{id}")
  static createCyn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
