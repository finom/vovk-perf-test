import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avx")
export default class AvxController {
  @operation({
    summary: "Get Avx",
  })
  @get()
  static getAvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avx",
  })
  @post("{id}")
  static createAvx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
