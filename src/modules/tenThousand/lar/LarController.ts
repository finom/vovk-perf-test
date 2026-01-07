import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lar")
export default class LarController {
  @operation({
    summary: "Get Lar",
  })
  @get()
  static getLar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lar",
  })
  @post("{id}")
  static createLar = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
