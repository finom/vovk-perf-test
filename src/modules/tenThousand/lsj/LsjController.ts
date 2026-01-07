import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsj")
export default class LsjController {
  @operation({
    summary: "Get Lsj",
  })
  @get()
  static getLsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsj",
  })
  @post("{id}")
  static createLsj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
