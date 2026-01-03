import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqks")
export default class KqkController {
  @operation({
    summary: "Get Kqks",
  })
  @get()
  static getKqks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqk",
  })
  @post("{id}")
  static createKqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
