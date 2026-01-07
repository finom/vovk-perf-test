import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crl")
export default class CrlController {
  @operation({
    summary: "Get Crl",
  })
  @get()
  static getCrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crl",
  })
  @post("{id}")
  static createCrl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
