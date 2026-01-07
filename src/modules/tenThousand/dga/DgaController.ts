import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dga")
export default class DgaController {
  @operation({
    summary: "Get Dga",
  })
  @get()
  static getDga = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dga",
  })
  @post("{id}")
  static createDga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
