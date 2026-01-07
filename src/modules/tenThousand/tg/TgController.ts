import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tg")
export default class TgController {
  @operation({
    summary: "Get Tg",
  })
  @get()
  static getTg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tg",
  })
  @post("{id}")
  static createTg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
