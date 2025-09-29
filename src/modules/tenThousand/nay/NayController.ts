import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nays")
export default class NayController {
  @operation({
    summary: "Get Nays",
  })
  @get()
  static getNays = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nay",
  })
  @post("{id}")
  static createNay = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
