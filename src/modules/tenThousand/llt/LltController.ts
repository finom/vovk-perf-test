import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llt")
export default class LltController {
  @operation({
    summary: "Get Llt",
  })
  @get()
  static getLlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llt",
  })
  @post("{id}")
  static createLlt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
