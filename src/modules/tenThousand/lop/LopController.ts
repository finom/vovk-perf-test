import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lop")
export default class LopController {
  @operation({
    summary: "Get Lop",
  })
  @get()
  static getLop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lop",
  })
  @post("{id}")
  static createLop = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
