import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxbs")
export default class JxbController {
  @operation({
    summary: "Get Jxbs",
  })
  @get()
  static getJxbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxb",
  })
  @post("{id}")
  static createJxb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
