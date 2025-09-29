import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgvs")
export default class DgvController {
  @operation({
    summary: "Get Dgvs",
  })
  @get()
  static getDgvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgv",
  })
  @post("{id}")
  static createDgv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
