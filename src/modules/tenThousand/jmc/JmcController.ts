import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmcs")
export default class JmcController {
  @operation({
    summary: "Get Jmcs",
  })
  @get()
  static getJmcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmc",
  })
  @post("{id}")
  static createJmc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
