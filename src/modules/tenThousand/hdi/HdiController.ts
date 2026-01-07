import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdi")
export default class HdiController {
  @operation({
    summary: "Get Hdi",
  })
  @get()
  static getHdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdi",
  })
  @post("{id}")
  static createHdi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
