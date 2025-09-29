import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdas")
export default class KdaController {
  @operation({
    summary: "Get Kdas",
  })
  @get()
  static getKdas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kda",
  })
  @post("{id}")
  static createKda = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
