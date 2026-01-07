import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lke")
export default class LkeController {
  @operation({
    summary: "Get Lke",
  })
  @get()
  static getLke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lke",
  })
  @post("{id}")
  static createLke = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
