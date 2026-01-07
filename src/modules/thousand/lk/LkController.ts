import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lk")
export default class LkController {
  @operation({
    summary: "Get Lk",
  })
  @get()
  static getLk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lk",
  })
  @post("{id}")
  static createLk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
