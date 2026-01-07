import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuf")
export default class CufController {
  @operation({
    summary: "Get Cuf",
  })
  @get()
  static getCuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuf",
  })
  @post("{id}")
  static createCuf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
