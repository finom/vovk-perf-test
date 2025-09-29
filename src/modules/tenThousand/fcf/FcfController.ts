import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcfs")
export default class FcfController {
  @operation({
    summary: "Get Fcfs",
  })
  @get()
  static getFcfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcf",
  })
  @post("{id}")
  static createFcf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
