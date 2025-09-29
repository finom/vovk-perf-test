import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyfs")
export default class KyfController {
  @operation({
    summary: "Get Kyfs",
  })
  @get()
  static getKyfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyf",
  })
  @post("{id}")
  static createKyf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
