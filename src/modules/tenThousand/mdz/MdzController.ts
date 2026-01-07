import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdz")
export default class MdzController {
  @operation({
    summary: "Get Mdz",
  })
  @get()
  static getMdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdz",
  })
  @post("{id}")
  static createMdz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
