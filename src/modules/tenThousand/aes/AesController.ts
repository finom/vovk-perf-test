import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aes")
export default class AesController {
  @operation({
    summary: "Get Aes",
  })
  @get()
  static getAes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aes",
  })
  @post("{id}")
  static createAes = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
