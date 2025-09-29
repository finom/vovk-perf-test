import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdis")
export default class MdiController {
  @operation({
    summary: "Get Mdis",
  })
  @get()
  static getMdis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdi",
  })
  @post("{id}")
  static createMdi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
