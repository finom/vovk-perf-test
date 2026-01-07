import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mng")
export default class MngController {
  @operation({
    summary: "Get Mng",
  })
  @get()
  static getMng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mng",
  })
  @post("{id}")
  static createMng = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
