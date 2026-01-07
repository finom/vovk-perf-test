import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpj")
export default class DpjController {
  @operation({
    summary: "Get Dpj",
  })
  @get()
  static getDpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpj",
  })
  @post("{id}")
  static createDpj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
