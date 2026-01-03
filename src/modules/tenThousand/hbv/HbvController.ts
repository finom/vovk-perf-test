import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbvs")
export default class HbvController {
  @operation({
    summary: "Get Hbvs",
  })
  @get()
  static getHbvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbv",
  })
  @post("{id}")
  static createHbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
