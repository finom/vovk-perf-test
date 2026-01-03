import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsis")
export default class FsiController {
  @operation({
    summary: "Get Fsis",
  })
  @get()
  static getFsis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsi",
  })
  @post("{id}")
  static createFsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
