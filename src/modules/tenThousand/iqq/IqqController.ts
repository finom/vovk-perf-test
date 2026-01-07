import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqq")
export default class IqqController {
  @operation({
    summary: "Get Iqq",
  })
  @get()
  static getIqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqq",
  })
  @post("{id}")
  static createIqq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
