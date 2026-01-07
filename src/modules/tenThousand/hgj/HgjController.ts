import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgj")
export default class HgjController {
  @operation({
    summary: "Get Hgj",
  })
  @get()
  static getHgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgj",
  })
  @post("{id}")
  static createHgj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
