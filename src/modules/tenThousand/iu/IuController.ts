import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iu")
export default class IuController {
  @operation({
    summary: "Get Iu",
  })
  @get()
  static getIu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iu",
  })
  @post("{id}")
  static createIu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
