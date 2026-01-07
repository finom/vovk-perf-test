import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbj")
export default class HbjController {
  @operation({
    summary: "Get Hbj",
  })
  @get()
  static getHbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbj",
  })
  @post("{id}")
  static createHbj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
