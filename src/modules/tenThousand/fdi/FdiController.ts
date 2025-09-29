import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdis")
export default class FdiController {
  @operation({
    summary: "Get Fdis",
  })
  @get()
  static getFdis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdi",
  })
  @post("{id}")
  static createFdi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
