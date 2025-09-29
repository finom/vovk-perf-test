import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mils")
export default class MilController {
  @operation({
    summary: "Get Mils",
  })
  @get()
  static getMils = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mil",
  })
  @post("{id}")
  static createMil = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
