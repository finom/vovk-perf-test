import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmls")
export default class JmlController {
  @operation({
    summary: "Get Jmls",
  })
  @get()
  static getJmls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jml",
  })
  @post("{id}")
  static createJml = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
