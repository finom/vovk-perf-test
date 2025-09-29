import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aers")
export default class AerController {
  @operation({
    summary: "Get Aers",
  })
  @get()
  static getAers = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aer",
  })
  @post("{id}")
  static createAer = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
