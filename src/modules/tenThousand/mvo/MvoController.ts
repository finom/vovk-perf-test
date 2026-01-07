import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvo")
export default class MvoController {
  @operation({
    summary: "Get Mvo",
  })
  @get()
  static getMvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvo",
  })
  @post("{id}")
  static createMvo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
