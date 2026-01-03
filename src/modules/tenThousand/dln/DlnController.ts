import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlns")
export default class DlnController {
  @operation({
    summary: "Get Dlns",
  })
  @get()
  static getDlns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dln",
  })
  @post("{id}")
  static createDln = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
