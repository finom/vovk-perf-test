import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmzs")
export default class JmzController {
  @operation({
    summary: "Get Jmzs",
  })
  @get()
  static getJmzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmz",
  })
  @post("{id}")
  static createJmz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
