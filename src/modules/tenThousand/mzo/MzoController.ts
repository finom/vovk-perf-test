import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzo")
export default class MzoController {
  @operation({
    summary: "Get Mzo",
  })
  @get()
  static getMzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzo",
  })
  @post("{id}")
  static createMzo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
