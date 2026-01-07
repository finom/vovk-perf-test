import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgu")
export default class MguController {
  @operation({
    summary: "Get Mgu",
  })
  @get()
  static getMgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgu",
  })
  @post("{id}")
  static createMgu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
