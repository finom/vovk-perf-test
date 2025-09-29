import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ioqs")
export default class IoqController {
  @operation({
    summary: "Get Ioqs",
  })
  @get()
  static getIoqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ioq",
  })
  @post("{id}")
  static createIoq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
