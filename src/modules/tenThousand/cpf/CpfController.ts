import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpfs")
export default class CpfController {
  @operation({
    summary: "Get Cpfs",
  })
  @get()
  static getCpfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpf",
  })
  @post("{id}")
  static createCpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
