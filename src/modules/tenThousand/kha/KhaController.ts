import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khas")
export default class KhaController {
  @operation({
    summary: "Get Khas",
  })
  @get()
  static getKhas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kha",
  })
  @post("{id}")
  static createKha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
