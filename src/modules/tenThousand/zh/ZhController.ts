import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zhs")
export default class ZhController {
  @operation({
    summary: "Get Zhs",
  })
  @get()
  static getZhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zh",
  })
  @post("{id}")
  static createZh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
