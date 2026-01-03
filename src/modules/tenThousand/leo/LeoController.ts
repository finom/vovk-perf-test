import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leos")
export default class LeoController {
  @operation({
    summary: "Get Leos",
  })
  @get()
  static getLeos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Leo",
  })
  @post("{id}")
  static createLeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
