import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbzs")
export default class JbzController {
  @operation({
    summary: "Get Jbzs",
  })
  @get()
  static getJbzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbz",
  })
  @post("{id}")
  static createJbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
