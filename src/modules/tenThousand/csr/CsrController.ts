import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csr")
export default class CsrController {
  @operation({
    summary: "Get Csr",
  })
  @get()
  static getCsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csr",
  })
  @post("{id}")
  static createCsr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
