import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdis")
export default class BdiController {
  @operation({
    summary: "Get Bdis",
  })
  @get()
  static getBdis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdi",
  })
  @post("{id}")
  static createBdi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
