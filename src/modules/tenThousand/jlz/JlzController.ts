import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlzs")
export default class JlzController {
  @operation({
    summary: "Get Jlzs",
  })
  @get()
  static getJlzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlz",
  })
  @post("{id}")
  static createJlz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
