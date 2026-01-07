import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npo")
export default class NpoController {
  @operation({
    summary: "Get Npo",
  })
  @get()
  static getNpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npo",
  })
  @post("{id}")
  static createNpo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
