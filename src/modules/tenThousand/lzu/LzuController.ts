import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzu")
export default class LzuController {
  @operation({
    summary: "Get Lzu",
  })
  @get()
  static getLzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzu",
  })
  @post("{id}")
  static createLzu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
