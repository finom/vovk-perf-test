import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vms")
export default class VmController {
  @operation({
    summary: "Get Vms",
  })
  @get()
  static getVms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vm",
  })
  @post("{id}")
  static createVm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
