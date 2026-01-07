import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqy")
export default class LqyController {
  @operation({
    summary: "Get Lqy",
  })
  @get()
  static getLqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqy",
  })
  @post("{id}")
  static createLqy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
