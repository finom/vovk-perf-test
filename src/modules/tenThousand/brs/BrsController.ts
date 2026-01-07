import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brs")
export default class BrsController {
  @operation({
    summary: "Get Brs",
  })
  @get()
  static getBrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brs",
  })
  @post("{id}")
  static createBrs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
