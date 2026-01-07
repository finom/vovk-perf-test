import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eiu")
export default class EiuController {
  @operation({
    summary: "Get Eiu",
  })
  @get()
  static getEiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eiu",
  })
  @post("{id}")
  static createEiu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
