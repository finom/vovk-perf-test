import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxps")
export default class JxpController {
  @operation({
    summary: "Get Jxps",
  })
  @get()
  static getJxps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxp",
  })
  @post("{id}")
  static createJxp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
