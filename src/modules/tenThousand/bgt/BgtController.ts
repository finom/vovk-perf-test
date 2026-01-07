import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgt")
export default class BgtController {
  @operation({
    summary: "Get Bgt",
  })
  @get()
  static getBgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgt",
  })
  @post("{id}")
  static createBgt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
