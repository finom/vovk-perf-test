import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtas")
export default class DtaController {
  @operation({
    summary: "Get Dtas",
  })
  @get()
  static getDtas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dta",
  })
  @post("{id}")
  static createDta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
