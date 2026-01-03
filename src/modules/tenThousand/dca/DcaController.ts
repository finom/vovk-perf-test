import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcas")
export default class DcaController {
  @operation({
    summary: "Get Dcas",
  })
  @get()
  static getDcas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dca",
  })
  @post("{id}")
  static createDca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
