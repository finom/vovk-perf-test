import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwz")
export default class MwzController {
  @operation({
    summary: "Get Mwz",
  })
  @get()
  static getMwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwz",
  })
  @post("{id}")
  static createMwz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
