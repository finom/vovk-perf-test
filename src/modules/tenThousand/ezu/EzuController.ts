import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezu")
export default class EzuController {
  @operation({
    summary: "Get Ezu",
  })
  @get()
  static getEzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezu",
  })
  @post("{id}")
  static createEzu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
