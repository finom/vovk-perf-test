import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jds")
export default class JdController {
  @operation({
    summary: "Get Jds",
  })
  @get()
  static getJds = procedure({
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
