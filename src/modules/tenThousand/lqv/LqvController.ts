import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqv")
export default class LqvController {
  @operation({
    summary: "Get Lqv",
  })
  @get()
  static getLqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqv",
  })
  @post("{id}")
  static createLqv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
