import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlt")
export default class NltController {
  @operation({
    summary: "Get Nlt",
  })
  @get()
  static getNlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlt",
  })
  @post("{id}")
  static createNlt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
