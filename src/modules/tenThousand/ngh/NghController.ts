import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nghs")
export default class NghController {
  @operation({
    summary: "Get Nghs",
  })
  @get()
  static getNghs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngh",
  })
  @post("{id}")
  static createNgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
