import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhu")
export default class LhuController {
  @operation({
    summary: "Get Lhu",
  })
  @get()
  static getLhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhu",
  })
  @post("{id}")
  static createLhu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
