import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmd")
export default class FmdController {
  @operation({
    summary: "Get Fmd",
  })
  @get()
  static getFmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmd",
  })
  @post("{id}")
  static createFmd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
