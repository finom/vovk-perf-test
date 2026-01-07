import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clz")
export default class ClzController {
  @operation({
    summary: "Get Clz",
  })
  @get()
  static getClz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clz",
  })
  @post("{id}")
  static createClz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
