import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkb")
export default class KkbController {
  @operation({
    summary: "Get Kkb",
  })
  @get()
  static getKkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkb",
  })
  @post("{id}")
  static createKkb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
