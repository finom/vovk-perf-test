import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwv")
export default class MwvController {
  @operation({
    summary: "Get Mwv",
  })
  @get()
  static getMwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwv",
  })
  @post("{id}")
  static createMwv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
