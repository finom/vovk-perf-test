import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuw")
export default class KuwController {
  @operation({
    summary: "Get Kuw",
  })
  @get()
  static getKuw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kuw",
  })
  @post("{id}")
  static createKuw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
