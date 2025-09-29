import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myos")
export default class MyoController {
  @operation({
    summary: "Get Myos",
  })
  @get()
  static getMyos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myo",
  })
  @post("{id}")
  static createMyo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
