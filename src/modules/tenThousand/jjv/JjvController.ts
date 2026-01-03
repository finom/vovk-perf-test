import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjvs")
export default class JjvController {
  @operation({
    summary: "Get Jjvs",
  })
  @get()
  static getJjvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjv",
  })
  @post("{id}")
  static createJjv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
