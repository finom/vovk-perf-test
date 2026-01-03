import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqqs")
export default class LqqController {
  @operation({
    summary: "Get Lqqs",
  })
  @get()
  static getLqqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqq",
  })
  @post("{id}")
  static createLqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
