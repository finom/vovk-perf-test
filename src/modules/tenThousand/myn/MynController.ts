import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myns")
export default class MynController {
  @operation({
    summary: "Get Myns",
  })
  @get()
  static getMyns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myn",
  })
  @post("{id}")
  static createMyn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
