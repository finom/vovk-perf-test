import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmb")
export default class JmbController {
  @operation({
    summary: "Get Jmb",
  })
  @get()
  static getJmb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmb",
  })
  @post("{id}")
  static createJmb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
