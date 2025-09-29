import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbts")
export default class HbtController {
  @operation({
    summary: "Get Hbts",
  })
  @get()
  static getHbts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbt",
  })
  @post("{id}")
  static createHbt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
