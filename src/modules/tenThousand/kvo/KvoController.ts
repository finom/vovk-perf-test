import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvo")
export default class KvoController {
  @operation({
    summary: "Get Kvo",
  })
  @get()
  static getKvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvo",
  })
  @post("{id}")
  static createKvo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
