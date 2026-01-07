import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bax")
export default class BaxController {
  @operation({
    summary: "Get Bax",
  })
  @get()
  static getBax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bax",
  })
  @post("{id}")
  static createBax = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
