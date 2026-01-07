import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jla")
export default class JlaController {
  @operation({
    summary: "Get Jla",
  })
  @get()
  static getJla = procedure({
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
