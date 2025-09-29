import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muis")
export default class MuiController {
  @operation({
    summary: "Get Muis",
  })
  @get()
  static getMuis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mui",
  })
  @post("{id}")
  static createMui = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
