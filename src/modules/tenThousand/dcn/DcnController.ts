import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcns")
export default class DcnController {
  @operation({
    summary: "Get Dcns",
  })
  @get()
  static getDcns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcn",
  })
  @post("{id}")
  static createDcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
