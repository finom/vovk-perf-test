import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmr")
export default class JmrController {
  @operation({
    summary: "Get Jmr",
  })
  @get()
  static getJmr = procedure({
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
