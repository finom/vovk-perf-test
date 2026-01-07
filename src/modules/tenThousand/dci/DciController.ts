import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dci")
export default class DciController {
  @operation({
    summary: "Get Dci",
  })
  @get()
  static getDci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dci",
  })
  @post("{id}")
  static createDci = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
