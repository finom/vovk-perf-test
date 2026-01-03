import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mres")
export default class MreController {
  @operation({
    summary: "Get Mres",
  })
  @get()
  static getMres = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mre",
  })
  @post("{id}")
  static createMre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
