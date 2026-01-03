import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjls")
export default class JjlController {
  @operation({
    summary: "Get Jjls",
  })
  @get()
  static getJjls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjl",
  })
  @post("{id}")
  static createJjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
