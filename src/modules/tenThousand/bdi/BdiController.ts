import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdi")
export default class BdiController {
  @operation({
    summary: "Get Bdi",
  })
  @get()
  static getBdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdi",
  })
  @post("{id}")
  static createBdi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
