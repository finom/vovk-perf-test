import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miy")
export default class MiyController {
  @operation({
    summary: "Get Miy",
  })
  @get()
  static getMiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Miy",
  })
  @post("{id}")
  static createMiy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
