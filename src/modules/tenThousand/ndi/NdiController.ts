import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndi")
export default class NdiController {
  @operation({
    summary: "Get Ndi",
  })
  @get()
  static getNdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndi",
  })
  @post("{id}")
  static createNdi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
