import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpfs")
export default class CpfController {
  @operation({
    summary: "Get Cpfs",
  })
  @get()
  static getCpfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpf",
  })
  @post("{id}")
  static createCpf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
