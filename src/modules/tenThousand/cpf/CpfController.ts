import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpf")
export default class CpfController {
  @operation({
    summary: "Get Cpf",
  })
  @get()
  static getCpf = procedure({
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
