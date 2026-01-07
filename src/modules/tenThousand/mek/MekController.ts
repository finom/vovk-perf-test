import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mek")
export default class MekController {
  @operation({
    summary: "Get Mek",
  })
  @get()
  static getMek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mek",
  })
  @post("{id}")
  static createMek = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
