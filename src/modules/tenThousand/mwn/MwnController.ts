import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwn")
export default class MwnController {
  @operation({
    summary: "Get Mwn",
  })
  @get()
  static getMwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwn",
  })
  @post("{id}")
  static createMwn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
