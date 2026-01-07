import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpj")
export default class BpjController {
  @operation({
    summary: "Get Bpj",
  })
  @get()
  static getBpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpj",
  })
  @post("{id}")
  static createBpj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
