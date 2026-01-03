import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxqs")
export default class JxqController {
  @operation({
    summary: "Get Jxqs",
  })
  @get()
  static getJxqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxq",
  })
  @post("{id}")
  static createJxq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
