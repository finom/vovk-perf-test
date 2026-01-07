import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lno")
export default class LnoController {
  @operation({
    summary: "Get Lno",
  })
  @get()
  static getLno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lno",
  })
  @post("{id}")
  static createLno = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
