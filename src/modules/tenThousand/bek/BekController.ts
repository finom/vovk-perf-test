import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bek")
export default class BekController {
  @operation({
    summary: "Get Bek",
  })
  @get()
  static getBek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bek",
  })
  @post("{id}")
  static createBek = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
