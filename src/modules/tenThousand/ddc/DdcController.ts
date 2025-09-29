import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddcs")
export default class DdcController {
  @operation({
    summary: "Get Ddcs",
  })
  @get()
  static getDdcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddc",
  })
  @post("{id}")
  static createDdc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
