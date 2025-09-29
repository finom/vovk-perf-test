import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mries")
export default class MryController {
  @operation({
    summary: "Get Mries",
  })
  @get()
  static getMries = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mry",
  })
  @post("{id}")
  static createMry = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
