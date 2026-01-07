import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jby")
export default class JbyController {
  @operation({
    summary: "Get Jby",
  })
  @get()
  static getJby = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jby",
  })
  @post("{id}")
  static createJby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
