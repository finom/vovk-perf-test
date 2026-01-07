import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bci")
export default class BciController {
  @operation({
    summary: "Get Bci",
  })
  @get()
  static getBci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bci",
  })
  @post("{id}")
  static createBci = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
