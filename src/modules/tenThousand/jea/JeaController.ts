import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jea")
export default class JeaController {
  @operation({
    summary: "Get Jea",
  })
  @get()
  static getJea = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jea",
  })
  @post("{id}")
  static createJea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
