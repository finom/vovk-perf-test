import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mga")
export default class MgaController {
  @operation({
    summary: "Get Mga",
  })
  @get()
  static getMga = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mga",
  })
  @post("{id}")
  static createMga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
