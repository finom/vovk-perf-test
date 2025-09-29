import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iios")
export default class IioController {
  @operation({
    summary: "Get Iios",
  })
  @get()
  static getIios = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iio",
  })
  @post("{id}")
  static createIio = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
