import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kar")
export default class KarController {
  @operation({
    summary: "Get Kar",
  })
  @get()
  static getKar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kar",
  })
  @post("{id}")
  static createKar = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
