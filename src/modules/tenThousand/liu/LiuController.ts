import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liu")
export default class LiuController {
  @operation({
    summary: "Get Liu",
  })
  @get()
  static getLiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Liu",
  })
  @post("{id}")
  static createLiu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
