import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lins")
export default class LinController {
  @operation({
    summary: "Get Lins",
  })
  @get()
  static getLins = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lin",
  })
  @post("{id}")
  static createLin = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
