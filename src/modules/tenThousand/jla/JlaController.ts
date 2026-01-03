import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlas")
export default class JlaController {
  @operation({
    summary: "Get Jlas",
  })
  @get()
  static getJlas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jla",
  })
  @post("{id}")
  static createJla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
