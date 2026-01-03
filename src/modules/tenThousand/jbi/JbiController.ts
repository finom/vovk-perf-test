import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbis")
export default class JbiController {
  @operation({
    summary: "Get Jbis",
  })
  @get()
  static getJbis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbi",
  })
  @post("{id}")
  static createJbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
