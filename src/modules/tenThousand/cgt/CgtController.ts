import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgt")
export default class CgtController {
  @operation({
    summary: "Get Cgt",
  })
  @get()
  static getCgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgt",
  })
  @post("{id}")
  static createCgt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
