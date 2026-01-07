import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzc")
export default class KzcController {
  @operation({
    summary: "Get Kzc",
  })
  @get()
  static getKzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzc",
  })
  @post("{id}")
  static createKzc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
