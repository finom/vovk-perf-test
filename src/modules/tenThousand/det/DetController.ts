import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dets")
export default class DetController {
  @operation({
    summary: "Get Dets",
  })
  @get()
  static getDets = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Det",
  })
  @post("{id}")
  static createDet = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
