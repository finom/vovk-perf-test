import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjo")
export default class MjoController {
  @operation({
    summary: "Get Mjo",
  })
  @get()
  static getMjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjo",
  })
  @post("{id}")
  static createMjo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
