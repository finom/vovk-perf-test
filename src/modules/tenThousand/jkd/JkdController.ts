import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkds")
export default class JkdController {
  @operation({
    summary: "Get Jkds",
  })
  @get()
  static getJkds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkd",
  })
  @post("{id}")
  static createJkd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
