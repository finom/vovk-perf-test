import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igt")
export default class IgtController {
  @operation({
    summary: "Get Igt",
  })
  @get()
  static getIgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igt",
  })
  @post("{id}")
  static createIgt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
