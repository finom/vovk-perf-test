import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsos")
export default class DsoController {
  @operation({
    summary: "Get Dsos",
  })
  @get()
  static getDsos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dso",
  })
  @post("{id}")
  static createDso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
