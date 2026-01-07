import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dh")
export default class DhController {
  @operation({
    summary: "Get Dh",
  })
  @get()
  static getDh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dh",
  })
  @post("{id}")
  static createDh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
