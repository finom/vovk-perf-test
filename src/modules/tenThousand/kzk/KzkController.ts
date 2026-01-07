import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzk")
export default class KzkController {
  @operation({
    summary: "Get Kzk",
  })
  @get()
  static getKzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzk",
  })
  @post("{id}")
  static createKzk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
