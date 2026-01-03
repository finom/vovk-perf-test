import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqqs")
export default class CqqController {
  @operation({
    summary: "Get Cqqs",
  })
  @get()
  static getCqqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqq",
  })
  @post("{id}")
  static createCqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
