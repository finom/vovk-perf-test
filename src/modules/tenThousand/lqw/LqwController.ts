import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqw")
export default class LqwController {
  @operation({
    summary: "Get Lqw",
  })
  @get()
  static getLqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqw",
  })
  @post("{id}")
  static createLqw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
