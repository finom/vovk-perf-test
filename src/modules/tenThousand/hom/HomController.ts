import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hom")
export default class HomController {
  @operation({
    summary: "Get Hom",
  })
  @get()
  static getHom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hom",
  })
  @post("{id}")
  static createHom = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
