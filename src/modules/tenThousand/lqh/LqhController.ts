import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqh")
export default class LqhController {
  @operation({
    summary: "Get Lqh",
  })
  @get()
  static getLqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqh",
  })
  @post("{id}")
  static createLqh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
