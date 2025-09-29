import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cris")
export default class CriController {
  @operation({
    summary: "Get Cris",
  })
  @get()
  static getCris = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cri",
  })
  @post("{id}")
  static createCri = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
