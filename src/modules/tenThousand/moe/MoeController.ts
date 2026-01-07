import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moe")
export default class MoeController {
  @operation({
    summary: "Get Moe",
  })
  @get()
  static getMoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moe",
  })
  @post("{id}")
  static createMoe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
