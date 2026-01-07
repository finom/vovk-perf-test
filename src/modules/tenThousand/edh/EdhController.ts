import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edh")
export default class EdhController {
  @operation({
    summary: "Get Edh",
  })
  @get()
  static getEdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edh",
  })
  @post("{id}")
  static createEdh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
