import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpf")
export default class CpfController {
  @operation({
    summary: "Get Cpf",
  })
  @get()
  static getCpf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpf",
  })
  @post("{id}")
  static createCpf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
