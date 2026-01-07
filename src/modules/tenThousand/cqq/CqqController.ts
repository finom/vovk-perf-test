import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqq")
export default class CqqController {
  @operation({
    summary: "Get Cqq",
  })
  @get()
  static getCqq = procedure({
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
