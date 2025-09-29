import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipus")
export default class IpuController {
  @operation({
    summary: "Get Ipus",
  })
  @get()
  static getIpus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipu",
  })
  @post("{id}")
  static createIpu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
