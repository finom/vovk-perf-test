import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knps")
export default class KnpController {
  @operation({
    summary: "Get Knps",
  })
  @get()
  static getKnps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knp",
  })
  @post("{id}")
  static createKnp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
