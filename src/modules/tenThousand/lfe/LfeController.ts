import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfe")
export default class LfeController {
  @operation({
    summary: "Get Lfe",
  })
  @get()
  static getLfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfe",
  })
  @post("{id}")
  static createLfe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
