import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nny")
export default class NnyController {
  @operation({
    summary: "Get Nny",
  })
  @get()
  static getNny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nny",
  })
  @post("{id}")
  static createNny = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
