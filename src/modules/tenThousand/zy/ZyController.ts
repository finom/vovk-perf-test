import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zy")
export default class ZyController {
  @operation({
    summary: "Get Zy",
  })
  @get()
  static getZy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zy",
  })
  @post("{id}")
  static createZy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
