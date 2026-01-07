import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doe")
export default class DoeController {
  @operation({
    summary: "Get Doe",
  })
  @get()
  static getDoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doe",
  })
  @post("{id}")
  static createDoe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
