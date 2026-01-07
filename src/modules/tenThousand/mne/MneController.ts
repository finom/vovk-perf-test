import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mne")
export default class MneController {
  @operation({
    summary: "Get Mne",
  })
  @get()
  static getMne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mne",
  })
  @post("{id}")
  static createMne = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
