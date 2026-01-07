import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbi")
export default class MbiController {
  @operation({
    summary: "Get Mbi",
  })
  @get()
  static getMbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbi",
  })
  @post("{id}")
  static createMbi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
