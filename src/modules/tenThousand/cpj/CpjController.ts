import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpj")
export default class CpjController {
  @operation({
    summary: "Get Cpj",
  })
  @get()
  static getCpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpj",
  })
  @post("{id}")
  static createCpj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
