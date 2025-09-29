import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgs")
export default class DgsController {
  @operation({
    summary: "Get Dgs",
  })
  @get()
  static getDgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgs",
  })
  @post("{id}")
  static createDgs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
