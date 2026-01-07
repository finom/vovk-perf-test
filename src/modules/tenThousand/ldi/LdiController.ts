import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldi")
export default class LdiController {
  @operation({
    summary: "Get Ldi",
  })
  @get()
  static getLdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldi",
  })
  @post("{id}")
  static createLdi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
