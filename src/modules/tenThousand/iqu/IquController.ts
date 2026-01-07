import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqu")
export default class IquController {
  @operation({
    summary: "Get Iqu",
  })
  @get()
  static getIqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqu",
  })
  @post("{id}")
  static createIqu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
