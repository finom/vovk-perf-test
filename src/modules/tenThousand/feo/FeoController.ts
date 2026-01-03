import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feos")
export default class FeoController {
  @operation({
    summary: "Get Feos",
  })
  @get()
  static getFeos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Feo",
  })
  @post("{id}")
  static createFeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
