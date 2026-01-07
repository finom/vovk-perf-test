import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcu")
export default class BcuController {
  @operation({
    summary: "Get Bcu",
  })
  @get()
  static getBcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcu",
  })
  @post("{id}")
  static createBcu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
