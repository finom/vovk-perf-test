import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kay")
export default class KayController {
  @operation({
    summary: "Get Kay",
  })
  @get()
  static getKay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kay",
  })
  @post("{id}")
  static createKay = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
