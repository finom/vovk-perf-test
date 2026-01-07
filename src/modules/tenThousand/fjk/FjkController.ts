import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjk")
export default class FjkController {
  @operation({
    summary: "Get Fjk",
  })
  @get()
  static getFjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fjk",
  })
  @post("{id}")
  static createFjk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
