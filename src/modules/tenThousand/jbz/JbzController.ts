import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbz")
export default class JbzController {
  @operation({
    summary: "Get Jbz",
  })
  @get()
  static getJbz = procedure({
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
