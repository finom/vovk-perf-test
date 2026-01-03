import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqqs")
export default class KqqController {
  @operation({
    summary: "Get Kqqs",
  })
  @get()
  static getKqqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqq",
  })
  @post("{id}")
  static createKqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
