import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgt")
export default class MgtController {
  @operation({
    summary: "Get Mgt",
  })
  @get()
  static getMgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgt",
  })
  @post("{id}")
  static createMgt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
