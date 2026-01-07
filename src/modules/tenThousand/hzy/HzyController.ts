import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzy")
export default class HzyController {
  @operation({
    summary: "Get Hzy",
  })
  @get()
  static getHzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzy",
  })
  @post("{id}")
  static createHzy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
