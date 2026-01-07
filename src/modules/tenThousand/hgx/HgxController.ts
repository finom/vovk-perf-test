import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgx")
export default class HgxController {
  @operation({
    summary: "Get Hgx",
  })
  @get()
  static getHgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgx",
  })
  @post("{id}")
  static createHgx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
