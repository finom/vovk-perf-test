import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqx")
export default class LqxController {
  @operation({
    summary: "Get Lqx",
  })
  @get()
  static getLqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqx",
  })
  @post("{id}")
  static createLqx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
