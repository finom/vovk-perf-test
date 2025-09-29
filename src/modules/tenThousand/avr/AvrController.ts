import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avrs")
export default class AvrController {
  @operation({
    summary: "Get Avrs",
  })
  @get()
  static getAvrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avr",
  })
  @post("{id}")
  static createAvr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
