import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aops")
export default class AopController {
  @operation({
    summary: "Get Aops",
  })
  @get()
  static getAops = procedure({
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
