import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqd")
export default class LqdController {
  @operation({
    summary: "Get Lqd",
  })
  @get()
  static getLqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqd",
  })
  @post("{id}")
  static createLqd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
