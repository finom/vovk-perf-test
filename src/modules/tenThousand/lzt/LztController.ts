import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzt")
export default class LztController {
  @operation({
    summary: "Get Lzt",
  })
  @get()
  static getLzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzt",
  })
  @post("{id}")
  static createLzt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
