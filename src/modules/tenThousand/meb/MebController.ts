import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meb")
export default class MebController {
  @operation({
    summary: "Get Meb",
  })
  @get()
  static getMeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Meb",
  })
  @post("{id}")
  static createMeb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
