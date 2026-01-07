import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwc")
export default class MwcController {
  @operation({
    summary: "Get Mwc",
  })
  @get()
  static getMwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwc",
  })
  @post("{id}")
  static createMwc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
