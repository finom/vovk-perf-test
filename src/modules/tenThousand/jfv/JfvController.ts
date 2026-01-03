import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfvs")
export default class JfvController {
  @operation({
    summary: "Get Jfvs",
  })
  @get()
  static getJfvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfv",
  })
  @post("{id}")
  static createJfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
