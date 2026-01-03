import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmrs")
export default class JmrController {
  @operation({
    summary: "Get Jmrs",
  })
  @get()
  static getJmrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmr",
  })
  @post("{id}")
  static createJmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
