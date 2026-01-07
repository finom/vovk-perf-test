import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mir")
export default class MirController {
  @operation({
    summary: "Get Mir",
  })
  @get()
  static getMir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mir",
  })
  @post("{id}")
  static createMir = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
