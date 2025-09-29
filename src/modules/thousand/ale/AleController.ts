import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ales")
export default class AleController {
  @operation({
    summary: "Get Ales",
  })
  @get()
  static getAles = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ale",
  })
  @post("{id}")
  static createAle = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
