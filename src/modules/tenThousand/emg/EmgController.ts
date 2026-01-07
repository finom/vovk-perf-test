import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emg")
export default class EmgController {
  @operation({
    summary: "Get Emg",
  })
  @get()
  static getEmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emg",
  })
  @post("{id}")
  static createEmg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
