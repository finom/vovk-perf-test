import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxq")
export default class JxqController {
  @operation({
    summary: "Get Jxq",
  })
  @get()
  static getJxq = procedure({
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
