import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jujs")
export default class JujController {
  @operation({
    summary: "Get Jujs",
  })
  @get()
  static getJujs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Juj",
  })
  @post("{id}")
  static createJuj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
