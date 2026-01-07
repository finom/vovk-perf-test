import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcu")
export default class KcuController {
  @operation({
    summary: "Get Kcu",
  })
  @get()
  static getKcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcu",
  })
  @post("{id}")
  static createKcu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
