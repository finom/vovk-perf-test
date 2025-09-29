import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hums")
export default class HumController {
  @operation({
    summary: "Get Hums",
  })
  @get()
  static getHums = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hum",
  })
  @post("{id}")
  static createHum = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
