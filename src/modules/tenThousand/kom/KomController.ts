import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kom")
export default class KomController {
  @operation({
    summary: "Get Kom",
  })
  @get()
  static getKom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kom",
  })
  @post("{id}")
  static createKom = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
