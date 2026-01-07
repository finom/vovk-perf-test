import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqr")
export default class LqrController {
  @operation({
    summary: "Get Lqr",
  })
  @get()
  static getLqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqr",
  })
  @post("{id}")
  static createLqr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
