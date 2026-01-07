import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcc")
export default class FccController {
  @operation({
    summary: "Get Fcc",
  })
  @get()
  static getFcc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcc",
  })
  @post("{id}")
  static createFcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
