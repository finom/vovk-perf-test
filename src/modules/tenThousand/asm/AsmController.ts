import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asms")
export default class AsmController {
  @operation({
    summary: "Get Asms",
  })
  @get()
  static getAsms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asm",
  })
  @post("{id}")
  static createAsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
