import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byws")
export default class BywController {
  @operation({
    summary: "Get Byws",
  })
  @get()
  static getByws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byw",
  })
  @post("{id}")
  static createByw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
