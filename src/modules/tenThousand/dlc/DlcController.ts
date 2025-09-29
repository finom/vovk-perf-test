import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlcs")
export default class DlcController {
  @operation({
    summary: "Get Dlcs",
  })
  @get()
  static getDlcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dlc",
  })
  @post("{id}")
  static createDlc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
