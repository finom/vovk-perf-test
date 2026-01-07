import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcn")
export default class GcnController {
  @operation({
    summary: "Get Gcn",
  })
  @get()
  static getGcn = procedure({
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
