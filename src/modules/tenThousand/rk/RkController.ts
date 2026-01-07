import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rk")
export default class RkController {
  @operation({
    summary: "Get Rk",
  })
  @get()
  static getRk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rk",
  })
  @post("{id}")
  static createRk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
