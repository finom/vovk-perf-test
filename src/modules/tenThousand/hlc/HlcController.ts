import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlc")
export default class HlcController {
  @operation({
    summary: "Get Hlc",
  })
  @get()
  static getHlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlc",
  })
  @post("{id}")
  static createHlc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
