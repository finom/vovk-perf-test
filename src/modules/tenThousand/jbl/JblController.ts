import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbls")
export default class JblController {
  @operation({
    summary: "Get Jbls",
  })
  @get()
  static getJbls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbl",
  })
  @post("{id}")
  static createJbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
