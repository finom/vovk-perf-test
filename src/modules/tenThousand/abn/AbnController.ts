import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abn")
export default class AbnController {
  @operation({
    summary: "Get Abn",
  })
  @get()
  static getAbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abn",
  })
  @post("{id}")
  static createAbn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
