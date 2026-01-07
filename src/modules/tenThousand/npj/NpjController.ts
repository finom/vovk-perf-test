import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npj")
export default class NpjController {
  @operation({
    summary: "Get Npj",
  })
  @get()
  static getNpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npj",
  })
  @post("{id}")
  static createNpj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
