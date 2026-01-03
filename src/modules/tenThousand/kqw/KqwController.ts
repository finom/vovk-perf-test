import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqws")
export default class KqwController {
  @operation({
    summary: "Get Kqws",
  })
  @get()
  static getKqws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqw",
  })
  @post("{id}")
  static createKqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
