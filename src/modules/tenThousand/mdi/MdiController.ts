import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdi")
export default class MdiController {
  @operation({
    summary: "Get Mdi",
  })
  @get()
  static getMdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdi",
  })
  @post("{id}")
  static createMdi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
