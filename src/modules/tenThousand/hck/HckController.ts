import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcks")
export default class HckController {
  @operation({
    summary: "Get Hcks",
  })
  @get()
  static getHcks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hck",
  })
  @post("{id}")
  static createHck = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
