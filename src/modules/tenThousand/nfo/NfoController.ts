import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfo")
export default class NfoController {
  @operation({
    summary: "Get Nfo",
  })
  @get()
  static getNfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfo",
  })
  @post("{id}")
  static createNfo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
