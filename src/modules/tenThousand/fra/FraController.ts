import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fra")
export default class FraController {
  @operation({
    summary: "Get Fra",
  })
  @get()
  static getFra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fra",
  })
  @post("{id}")
  static createFra = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
