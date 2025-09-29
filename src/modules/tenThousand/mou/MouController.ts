import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mous")
export default class MouController {
  @operation({
    summary: "Get Mous",
  })
  @get()
  static getMous = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mou",
  })
  @post("{id}")
  static createMou = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
