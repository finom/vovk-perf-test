import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqk")
export default class LqkController {
  @operation({
    summary: "Get Lqk",
  })
  @get()
  static getLqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqk",
  })
  @post("{id}")
  static createLqk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
