import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ke")
export default class KeController {
  @operation({
    summary: "Get Ke",
  })
  @get()
  static getKe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ke",
  })
  @post("{id}")
  static createKe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
