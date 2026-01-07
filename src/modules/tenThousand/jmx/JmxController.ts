import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmx")
export default class JmxController {
  @operation({
    summary: "Get Jmx",
  })
  @get()
  static getJmx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmx",
  })
  @post("{id}")
  static createJmx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
