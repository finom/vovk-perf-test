import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avds")
export default class AvdController {
  @operation({
    summary: "Get Avds",
  })
  @get()
  static getAvds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avd",
  })
  @post("{id}")
  static createAvd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
