import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxn")
export default class HxnController {
  @operation({
    summary: "Get Hxn",
  })
  @get()
  static getHxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxn",
  })
  @post("{id}")
  static createHxn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
