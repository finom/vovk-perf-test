import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mke")
export default class MkeController {
  @operation({
    summary: "Get Mke",
  })
  @get()
  static getMke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mke",
  })
  @post("{id}")
  static createMke = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
