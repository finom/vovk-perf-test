import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nar")
export default class NarController {
  @operation({
    summary: "Get Nar",
  })
  @get()
  static getNar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nar",
  })
  @post("{id}")
  static createNar = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
