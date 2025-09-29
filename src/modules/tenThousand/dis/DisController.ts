import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dis")
export default class DisController {
  @operation({
    summary: "Get Dis",
  })
  @get()
  static getDis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dis",
  })
  @post("{id}")
  static createDis = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
