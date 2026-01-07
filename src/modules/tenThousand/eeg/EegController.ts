import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeg")
export default class EegController {
  @operation({
    summary: "Get Eeg",
  })
  @get()
  static getEeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eeg",
  })
  @post("{id}")
  static createEeg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
