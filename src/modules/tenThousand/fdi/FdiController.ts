import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdi")
export default class FdiController {
  @operation({
    summary: "Get Fdi",
  })
  @get()
  static getFdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdi",
  })
  @post("{id}")
  static createFdi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
