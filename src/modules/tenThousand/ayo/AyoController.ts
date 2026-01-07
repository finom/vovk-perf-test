import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayo")
export default class AyoController {
  @operation({
    summary: "Get Ayo",
  })
  @get()
  static getAyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayo",
  })
  @post("{id}")
  static createAyo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
