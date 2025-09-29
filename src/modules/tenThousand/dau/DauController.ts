import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("daus")
export default class DauController {
  @operation({
    summary: "Get Daus",
  })
  @get()
  static getDaus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dau",
  })
  @post("{id}")
  static createDau = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
