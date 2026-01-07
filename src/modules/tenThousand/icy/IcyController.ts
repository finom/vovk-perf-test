import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icy")
export default class IcyController {
  @operation({
    summary: "Get Icy",
  })
  @get()
  static getIcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icy",
  })
  @post("{id}")
  static createIcy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
