import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyos")
export default class CyoController {
  @operation({
    summary: "Get Cyos",
  })
  @get()
  static getCyos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyo",
  })
  @post("{id}")
  static createCyo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
