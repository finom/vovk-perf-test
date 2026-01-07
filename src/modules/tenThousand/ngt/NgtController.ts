import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngt")
export default class NgtController {
  @operation({
    summary: "Get Ngt",
  })
  @get()
  static getNgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngt",
  })
  @post("{id}")
  static createNgt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
