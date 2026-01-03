import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcns")
export default class GcnController {
  @operation({
    summary: "Get Gcns",
  })
  @get()
  static getGcns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcn",
  })
  @post("{id}")
  static createGcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
