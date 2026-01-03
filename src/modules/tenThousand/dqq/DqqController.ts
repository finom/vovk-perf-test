import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqqs")
export default class DqqController {
  @operation({
    summary: "Get Dqqs",
  })
  @get()
  static getDqqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqq",
  })
  @post("{id}")
  static createDqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
