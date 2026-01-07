import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iiu")
export default class IiuController {
  @operation({
    summary: "Get Iiu",
  })
  @get()
  static getIiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iiu",
  })
  @post("{id}")
  static createIiu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
