import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inbs")
export default class InbController {
  @operation({
    summary: "Get Inbs",
  })
  @get()
  static getInbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inb",
  })
  @post("{id}")
  static createInb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
