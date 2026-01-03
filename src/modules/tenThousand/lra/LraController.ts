import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lras")
export default class LraController {
  @operation({
    summary: "Get Lras",
  })
  @get()
  static getLras = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lra",
  })
  @post("{id}")
  static createLra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
