import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cil")
export default class CilController {
  @operation({
    summary: "Get Cil",
  })
  @get()
  static getCil = procedure({
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
