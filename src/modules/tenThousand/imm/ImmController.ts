import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imms")
export default class ImmController {
  @operation({
    summary: "Get Imms",
  })
  @get()
  static getImms = procedure({
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
