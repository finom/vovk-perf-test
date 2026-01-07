import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjv")
export default class JjvController {
  @operation({
    summary: "Get Jjv",
  })
  @get()
  static getJjv = procedure({
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
