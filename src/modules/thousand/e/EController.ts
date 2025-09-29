import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("es")
export default class EController {
  @operation({
    summary: "Get ES",
  })
  @get()
  static getES = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create E",
  })
  @post("{id}")
  static createE = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
