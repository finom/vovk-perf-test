import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ious")
export default class IouController {
  @operation({
    summary: "Get Ious",
  })
  @get()
  static getIous = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iou",
  })
  @post("{id}")
  static createIou = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
