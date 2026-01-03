import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqls")
export default class KqlController {
  @operation({
    summary: "Get Kqls",
  })
  @get()
  static getKqls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kql",
  })
  @post("{id}")
  static createKql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
