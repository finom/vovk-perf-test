import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmw")
export default class JmwController {
  @operation({
    summary: "Get Jmw",
  })
  @get()
  static getJmw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmw",
  })
  @post("{id}")
  static createJmw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
