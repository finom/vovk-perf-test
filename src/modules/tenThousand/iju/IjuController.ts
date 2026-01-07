import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iju")
export default class IjuController {
  @operation({
    summary: "Get Iju",
  })
  @get()
  static getIju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iju",
  })
  @post("{id}")
  static createIju = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
