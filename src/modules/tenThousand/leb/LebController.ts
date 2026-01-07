import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leb")
export default class LebController {
  @operation({
    summary: "Get Leb",
  })
  @get()
  static getLeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Leb",
  })
  @post("{id}")
  static createLeb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
