import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imm")
export default class ImmController {
  @operation({
    summary: "Get Imm",
  })
  @get()
  static getImm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imm",
  })
  @post("{id}")
  static createImm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
