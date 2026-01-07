import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvo")
export default class DvoController {
  @operation({
    summary: "Get Dvo",
  })
  @get()
  static getDvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvo",
  })
  @post("{id}")
  static createDvo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
