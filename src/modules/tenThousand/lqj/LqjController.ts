import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqj")
export default class LqjController {
  @operation({
    summary: "Get Lqj",
  })
  @get()
  static getLqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqj",
  })
  @post("{id}")
  static createLqj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
