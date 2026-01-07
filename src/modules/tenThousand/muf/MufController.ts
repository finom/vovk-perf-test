import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muf")
export default class MufController {
  @operation({
    summary: "Get Muf",
  })
  @get()
  static getMuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muf",
  })
  @post("{id}")
  static createMuf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
