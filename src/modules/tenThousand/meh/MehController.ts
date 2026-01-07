import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meh")
export default class MehController {
  @operation({
    summary: "Get Meh",
  })
  @get()
  static getMeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Meh",
  })
  @post("{id}")
  static createMeh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
