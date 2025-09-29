import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvds")
export default class MvdController {
  @operation({
    summary: "Get Mvds",
  })
  @get()
  static getMvds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvd",
  })
  @post("{id}")
  static createMvd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
