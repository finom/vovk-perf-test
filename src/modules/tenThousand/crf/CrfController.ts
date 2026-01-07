import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crf")
export default class CrfController {
  @operation({
    summary: "Get Crf",
  })
  @get()
  static getCrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crf",
  })
  @post("{id}")
  static createCrf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
