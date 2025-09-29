import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auns")
export default class AunController {
  @operation({
    summary: "Get Auns",
  })
  @get()
  static getAuns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aun",
  })
  @post("{id}")
  static createAun = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
