import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmh")
export default class JmhController {
  @operation({
    summary: "Get Jmh",
  })
  @get()
  static getJmh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmh",
  })
  @post("{id}")
  static createJmh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
