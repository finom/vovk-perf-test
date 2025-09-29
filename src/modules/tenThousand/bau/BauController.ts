import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("baus")
export default class BauController {
  @operation({
    summary: "Get Baus",
  })
  @get()
  static getBaus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bau",
  })
  @post("{id}")
  static createBau = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
