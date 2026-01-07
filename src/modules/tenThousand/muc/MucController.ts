import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muc")
export default class MucController {
  @operation({
    summary: "Get Muc",
  })
  @get()
  static getMuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muc",
  })
  @post("{id}")
  static createMuc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
