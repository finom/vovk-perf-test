import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fil")
export default class FilController {
  @operation({
    summary: "Get Fil",
  })
  @get()
  static getFil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fil",
  })
  @post("{id}")
  static createFil = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
