import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtos")
export default class DtoController {
  @operation({
    summary: "Get Dtos",
  })
  @get()
  static getDtos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dto",
  })
  @post("{id}")
  static createDto = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
