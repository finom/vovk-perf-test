import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duc")
export default class DucController {
  @operation({
    summary: "Get Duc",
  })
  @get()
  static getDuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duc",
  })
  @post("{id}")
  static createDuc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
