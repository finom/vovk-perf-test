import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dios")
export default class DioController {
  @operation({
    summary: "Get Dios",
  })
  @get()
  static getDios = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dio",
  })
  @post("{id}")
  static createDio = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
