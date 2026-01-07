import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dek")
export default class DekController {
  @operation({
    summary: "Get Dek",
  })
  @get()
  static getDek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dek",
  })
  @post("{id}")
  static createDek = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
