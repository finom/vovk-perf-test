import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgo")
export default class KgoController {
  @operation({
    summary: "Get Kgo",
  })
  @get()
  static getKgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgo",
  })
  @post("{id}")
  static createKgo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
