import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwj")
export default class MwjController {
  @operation({
    summary: "Get Mwj",
  })
  @get()
  static getMwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwj",
  })
  @post("{id}")
  static createMwj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
