import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khds")
export default class KhdController {
  @operation({
    summary: "Get Khds",
  })
  @get()
  static getKhds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khd",
  })
  @post("{id}")
  static createKhd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
