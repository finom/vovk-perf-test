import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmhs")
export default class JmhController {
  @operation({
    summary: "Get Jmhs",
  })
  @get()
  static getJmhs = procedure({
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
