import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miu")
export default class MiuController {
  @operation({
    summary: "Get Miu",
  })
  @get()
  static getMiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Miu",
  })
  @post("{id}")
  static createMiu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
