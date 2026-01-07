import { procedure, prefix, get, post, operation } from "vovk";

@prefix("haa")
export default class HaaController {
  @operation({
    summary: "Get Haa",
  })
  @get()
  static getHaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Haa",
  })
  @post("{id}")
  static createHaa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
