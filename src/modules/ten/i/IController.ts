import { procedure, prefix, get, post, operation } from "vovk";

@prefix("i")
export default class IController {
  @operation({
    summary: "Get I",
  })
  @get()
  static getI = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create I",
  })
  @post("{id}")
  static createI = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
