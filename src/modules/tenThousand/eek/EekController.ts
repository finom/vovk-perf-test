import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eek")
export default class EekController {
  @operation({
    summary: "Get Eek",
  })
  @get()
  static getEek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eek",
  })
  @post("{id}")
  static createEek = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
