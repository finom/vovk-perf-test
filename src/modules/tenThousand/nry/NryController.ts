import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nries")
export default class NryController {
  @operation({
    summary: "Get Nries",
  })
  @get()
  static getNries = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nry",
  })
  @post("{id}")
  static createNry = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
