import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpj")
export default class FpjController {
  @operation({
    summary: "Get Fpj",
  })
  @get()
  static getFpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpj",
  })
  @post("{id}")
  static createFpj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
