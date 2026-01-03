import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrws")
export default class JrwController {
  @operation({
    summary: "Get Jrws",
  })
  @get()
  static getJrws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrw",
  })
  @post("{id}")
  static createJrw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
