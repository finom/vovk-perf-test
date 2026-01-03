import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkws")
export default class KkwController {
  @operation({
    summary: "Get Kkws",
  })
  @get()
  static getKkws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkw",
  })
  @post("{id}")
  static createKkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
