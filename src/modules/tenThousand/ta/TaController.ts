import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ta")
export default class TaController {
  @operation({
    summary: "Get Ta",
  })
  @get()
  static getTa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ta",
  })
  @post("{id}")
  static createTa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
