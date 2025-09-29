import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipcs")
export default class IpcController {
  @operation({
    summary: "Get Ipcs",
  })
  @get()
  static getIpcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipc",
  })
  @post("{id}")
  static createIpc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
