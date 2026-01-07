import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltu")
export default class LtuController {
  @operation({
    summary: "Get Ltu",
  })
  @get()
  static getLtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltu",
  })
  @post("{id}")
  static createLtu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
