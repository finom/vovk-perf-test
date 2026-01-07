import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khy")
export default class KhyController {
  @operation({
    summary: "Get Khy",
  })
  @get()
  static getKhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khy",
  })
  @post("{id}")
  static createKhy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
