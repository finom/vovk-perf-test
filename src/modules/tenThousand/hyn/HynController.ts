import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyns")
export default class HynController {
  @operation({
    summary: "Get Hyns",
  })
  @get()
  static getHyns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyn",
  })
  @post("{id}")
  static createHyn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
