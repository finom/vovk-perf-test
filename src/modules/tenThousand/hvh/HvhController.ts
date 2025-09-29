import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvhs")
export default class HvhController {
  @operation({
    summary: "Get Hvhs",
  })
  @get()
  static getHvhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvh",
  })
  @post("{id}")
  static createHvh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
