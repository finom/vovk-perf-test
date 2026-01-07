import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lug")
export default class LugController {
  @operation({
    summary: "Get Lug",
  })
  @get()
  static getLug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lug",
  })
  @post("{id}")
  static createLug = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
