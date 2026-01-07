import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyo")
export default class CyoController {
  @operation({
    summary: "Get Cyo",
  })
  @get()
  static getCyo = procedure({
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
