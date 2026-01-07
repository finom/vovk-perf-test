import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lym")
export default class LymController {
  @operation({
    summary: "Get Lym",
  })
  @get()
  static getLym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lym",
  })
  @post("{id}")
  static createLym = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
