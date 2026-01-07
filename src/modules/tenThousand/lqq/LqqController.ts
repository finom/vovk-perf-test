import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqq")
export default class LqqController {
  @operation({
    summary: "Get Lqq",
  })
  @get()
  static getLqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqq",
  })
  @post("{id}")
  static createLqq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
