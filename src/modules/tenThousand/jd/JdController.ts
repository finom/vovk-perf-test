import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jd")
export default class JdController {
  @operation({
    summary: "Get Jd",
  })
  @get()
  static getJd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jd",
  })
  @post("{id}")
  static createJd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
