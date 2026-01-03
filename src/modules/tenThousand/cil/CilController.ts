import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cils")
export default class CilController {
  @operation({
    summary: "Get Cils",
  })
  @get()
  static getCils = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cil",
  })
  @post("{id}")
  static createCil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
