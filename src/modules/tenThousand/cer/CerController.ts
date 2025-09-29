import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cers")
export default class CerController {
  @operation({
    summary: "Get Cers",
  })
  @get()
  static getCers = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cer",
  })
  @post("{id}")
  static createCer = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
