import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mus")
export default class MusController {
  @operation({
    summary: "Get Mus",
  })
  @get()
  static getMus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mus",
  })
  @post("{id}")
  static createMus = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
