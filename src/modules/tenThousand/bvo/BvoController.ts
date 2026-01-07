import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvo")
export default class BvoController {
  @operation({
    summary: "Get Bvo",
  })
  @get()
  static getBvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvo",
  })
  @post("{id}")
  static createBvo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
