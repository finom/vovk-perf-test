import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cep")
export default class CepController {
  @operation({
    summary: "Get Cep",
  })
  @get()
  static getCep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cep",
  })
  @post("{id}")
  static createCep = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
