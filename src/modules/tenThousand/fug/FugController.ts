import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fug")
export default class FugController {
  @operation({
    summary: "Get Fug",
  })
  @get()
  static getFug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fug",
  })
  @post("{id}")
  static createFug = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
