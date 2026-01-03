import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxhs")
export default class JxhController {
  @operation({
    summary: "Get Jxhs",
  })
  @get()
  static getJxhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxh",
  })
  @post("{id}")
  static createJxh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
