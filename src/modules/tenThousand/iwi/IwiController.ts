import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwi")
export default class IwiController {
  @operation({
    summary: "Get Iwi",
  })
  @get()
  static getIwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwi",
  })
  @post("{id}")
  static createIwi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
