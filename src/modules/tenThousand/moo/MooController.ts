import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moo")
export default class MooController {
  @operation({
    summary: "Get Moo",
  })
  @get()
  static getMoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moo",
  })
  @post("{id}")
  static createMoo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
