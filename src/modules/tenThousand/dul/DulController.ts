import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dul")
export default class DulController {
  @operation({
    summary: "Get Dul",
  })
  @get()
  static getDul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dul",
  })
  @post("{id}")
  static createDul = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
