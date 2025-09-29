import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efds")
export default class EfdController {
  @operation({
    summary: "Get Efds",
  })
  @get()
  static getEfds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efd",
  })
  @post("{id}")
  static createEfd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
