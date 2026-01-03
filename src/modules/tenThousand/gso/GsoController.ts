import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsos")
export default class GsoController {
  @operation({
    summary: "Get Gsos",
  })
  @get()
  static getGsos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gso",
  })
  @post("{id}")
  static createGso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
