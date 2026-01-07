import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dco")
export default class DcoController {
  @operation({
    summary: "Get Dco",
  })
  @get()
  static getDco = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dco",
  })
  @post("{id}")
  static createDco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
