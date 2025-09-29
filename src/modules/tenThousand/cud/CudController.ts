import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuds")
export default class CudController {
  @operation({
    summary: "Get Cuds",
  })
  @get()
  static getCuds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cud",
  })
  @post("{id}")
  static createCud = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
