import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aop")
export default class AopController {
  @operation({
    summary: "Get Aop",
  })
  @get()
  static getAop = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aop",
  })
  @post("{id}")
  static createAop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
