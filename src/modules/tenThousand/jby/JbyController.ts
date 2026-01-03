import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbies")
export default class JbyController {
  @operation({
    summary: "Get Jbies",
  })
  @get()
  static getJbies = procedure({
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
