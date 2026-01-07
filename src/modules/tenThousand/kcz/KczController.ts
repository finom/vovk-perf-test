import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcz")
export default class KczController {
  @operation({
    summary: "Get Kcz",
  })
  @get()
  static getKcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcz",
  })
  @post("{id}")
  static createKcz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
