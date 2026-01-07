import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiz")
export default class KizController {
  @operation({
    summary: "Get Kiz",
  })
  @get()
  static getKiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kiz",
  })
  @post("{id}")
  static createKiz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
