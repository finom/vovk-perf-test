import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jn")
export default class JnController {
  @operation({
    summary: "Get Jn",
  })
  @get()
  static getJn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jn",
  })
  @post("{id}")
  static createJn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
