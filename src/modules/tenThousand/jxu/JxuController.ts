import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxus")
export default class JxuController {
  @operation({
    summary: "Get Jxus",
  })
  @get()
  static getJxus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxu",
  })
  @post("{id}")
  static createJxu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
