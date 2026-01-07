import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mru")
export default class MruController {
  @operation({
    summary: "Get Mru",
  })
  @get()
  static getMru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mru",
  })
  @post("{id}")
  static createMru = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
